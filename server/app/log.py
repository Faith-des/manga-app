"""Package Logs Module."""

import logging

import coloredlogs

logger = logging.getLogger(__name__)

coloredlogs.install(level="DEBUG", milliseconds=True)
