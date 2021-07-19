import { Inject, Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client/build/src';
import { NOTION_CONFIG_OPTIONS } from './notion.constants';
import { NotionOptions } from './notion.types';

@Injectable()
export class NotionService {
  public readonly notion: Client;

  constructor(
    @Inject(NOTION_CONFIG_OPTIONS)
    public readonly options: NotionOptions
  ) {
    this.notion = new Client(this.options);
  }
}
