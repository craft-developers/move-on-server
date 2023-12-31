import { Injectable, PipeTransform } from '@nestjs/common';
import { VideoInputDto } from '../dto/video.input.dto';

@Injectable()
export class ShortDetectorPipe implements PipeTransform {
  private readonly MIN_RATIO_THRESHOLD = 0.3;
  private readonly MAX_RATIO_THRESHOLD = 0.6;

  transform(value: VideoInputDto.GetUploadVideoSignedUrlInput) {
    const isShort = this.isWithinShortThreshold(value.Width, value.Height);

    if (isShort) {
      value.IsShort = true;
    }

    return value;
  }

  private isWithinShortThreshold(width: number, height: number): boolean {
    const aspectRatio = width / height;

    return aspectRatio >= this.MIN_RATIO_THRESHOLD && aspectRatio <= this.MAX_RATIO_THRESHOLD;
  }
}
