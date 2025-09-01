#!/usr/bin/env python3

import os
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
    """Configure logging for the application."""
    logging.basicConfig(level=logging.INFO, format=LOG_FORMAT)
    return logging.getLogger(__name__)

def convert_png_to_jpg(png_path: Path, quality: int = JPEG_QUALITY) -> bool:
    """Convert a single PNG file to JPG format.
    
    Returns True if conversion successful, False otherwise.
    """
    try:
        with Image.open(png_path) as img:
            # Convert RGBA to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                rgb_img.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = rgb_img
            
            jpg_path = png_path.with_suffix(OUTPUT_EXTENSION)
            img.save(jpg_path, 'JPEG', quality=quality, optimize=True)
            return True
            
    except Exception as e:
        logging.error(f"Failed to convert {png_path}: {e}")
        return False

def get_png_files(directory: Path) -> list[Path]:
    """Get all PNG files in the specified directory."""
    return [f for f in directory.iterdir() 
            if f.is_file() and f.suffix.lower() == INPUT_EXTENSION]

def main():
    """Main conversion process."""
    logger = setup_logging()
    current_dir = Path.cwd()
    
    png_files = get_png_files(current_dir)
    
    if not png_files:
        logger.info("No PNG files found in current directory")
        return
    
    logger.info(f"Found {len(png_files)} PNG files to convert")
    
    success_count = 0
    for png_file in png_files:
        logger.info(f"Converting {png_file.name}")
        if convert_png_to_jpg(png_file):
            success_count += 1
            logger.info(f"✓ Converted {png_file.name}")
        else:
            logger.error(f"✗ Failed to convert {png_file.name}")
    
    logger.info(f"Conversion complete: {success_count}/{len(png_files)} files converted")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        logging.info("Conversion interrupted by user")
        sys.exit(1)
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        sys.exit(1)