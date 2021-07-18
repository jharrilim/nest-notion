import { DynamicModule, Global, Module } from '@nestjs/common';
import { NotionService } from './notion.service';
import { NOTION_CONFIG_OPTIONS } from './notion.constants';
import { NotionOptions } from './notion.types';


@Global()
@Module({})
export class NotionModule {
  static forRoot(options: NotionOptions): DynamicModule {
    return {
      module: NotionModule,
      providers: [
        {
          provide: NOTION_CONFIG_OPTIONS,
          useValue: options,
        },
        NotionService,
      ],
      exports: [
        NotionService,
      ],
    };
  }
}
