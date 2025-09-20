#!/usr/bin/env python3

import sys
import logging
from pathlib import Path
from PIL import Image

# Constants
INPUT_EXTENSION = '.png'
OUTPUT_EXTENSION = '.jpg'
JPEG_QUALITY = 95
LOG_FORMAT = '%(asctime)s - %(levelname)s - %(message)s'

def setup_logging():
    logging.basicConfig(level=logging.INFO, format=LOG_FORMAT)
    return logging.getLogger(__name__)

def _validate_jpeg(jpg_path: Path, expected_size: tuple[int, int]) -> bool:
    try:
        if not jpg_path.exists() or jpg_path.stat().st_size <= 0:
            return False
        with Image.open(jpg_path) as im:
            im.verify()  # structural check
        with Image.open(jpg_path) as im2:
            if (im2.format or '').upper() != 'JPEG':
                return False
            if im2.size != expected_size:
                return False
        return True
    except Exception:
        return False

def convert_png_to_jpg(png_path: Path, quality: int = JPEG_QUALITY) -> bool:
    try:
        with Image.open(png_path) as img:
            if img.mode in ('RGBA', 'LA', 'P'):
                base = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                base.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = base
            else:
                img = img.convert('RGB')

            expected_size = img.size
            jpg_path = png_path.with_suffix(OUTPUT_EXTENSION)
            tmp_path = jpg_path.with_suffix('.jpg.tmp')
            img.save(tmp_path, 'JPEG', quality=quality, optimize=True)

        if _validate_jpeg(tmp_path, expected_size):
            if jpg_path.exists():
                jpg_path.unlink()
            tmp_path.rename(jpg_path)
            try:
                png_path.unlink()
            except Exception as del_err:
                logging.error("Converted %s but failed to delete original PNG: %s", png_path.name, del_err)
                return False
            return True
        else:
            logging.error("Validation failed for %s; keeping PNG.", png_path.name)
            try:
                tmp_path.unlink(missing_ok=True)
            except Exception:
                pass
            return False

    except Exception as e:
        logging.error("Failed to convert %s: %s", png_path, e)
        return False

def get_png_files(directory: Path) -> list[Path]:
    return [f for f in directory.iterdir() if f.is_file() and f.suffix.lower() == INPUT_EXTENSION]

def main():
    logger = setup_logging()
    current_dir = Path.cwd()
    png_files = get_png_files(current_dir)

    if not png_files:
        logger.info("No PNG files found in current directory")
        return

    logger.info("Found %d PNG files to convert", len(png_files))
    success_count = 0

    for png_file in png_files:
        logger.info("Converting %s", png_file.name)
        if convert_png_to_jpg(png_file):
            success_count += 1
            logger.info("✓ Converted and deleted %s", png_file.name)
        else:
            logger.error("✗ Failed to convert %s", png_file.name)

    logger.info("Conversion complete: %d/%d files converted", success_count, len(png_files))

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        logging.info("Conversion interrupted by user")
        sys.exit(1)
    except Exception as e:
        logging.error("Unexpected error: %s", e)
        sys.exit(1)
