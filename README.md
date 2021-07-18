# nest-notion

Nest module for using the [Notion API](https://developers.notion.com/).

## Usage

In `app.module.ts`:

```ts
import { NotionModule } from 'nest-notion';

@Module({
  imports: [
    NotionModule.forRoot({
      auth: process.env.NOTION_SECRET,
    }),
    VegetableModule,
  ],
})
export class AppModule {}
```

In one of the modules you wish to use it in:

```ts
import { Module } from '@nestjs/common';
import { VegetableService } from './vegetable.service';
import { NotionModule } from 'nest-notion';

@Module({
  imports: [
    NotionModule,
  ],
  providers: [VegetableService],
  exports: [
    VegetableService,
  ],
})
export class VegetableModule {}

```

And in the service within the module:

```ts
import { Inject, Injectable } from '@nestjs/common';
import { NotionService } from 'nest-notion';

@Injectable()
export class VegetableService {
  constructor(
    @Inject(NotionService)
    private readonly notionService: NotionService
  ) { }

  listUsers() {
    return this.notionService.notion.users.list({ page_size: 10 });
  }
}

```