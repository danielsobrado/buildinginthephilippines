# PNG to JPG Converter

Bulk converts all PNG images in the current directory to JPG format.

## Features

- Processes all PNG files in current directory
- Handles transparency by converting to white background
- 95% JPEG quality for optimal file size/quality balance
- Progress logging for each conversion
- Continues processing if individual files fail

## Installation

```bash
pip install Pillow
```

## Usage

```bash
python converPNGtoJPG.py
```

## Output

- Original PNG files remain unchanged
- New JPG files created with same filename
- Conversion progress logged to console

## Requirements

- Python 3.7+
- Pillow library for image processing

##