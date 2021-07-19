# nest-notion

![npm](https://img.shields.io/npm/v/nest-notion?style=flat-square)
![npm](https://img.shields.io/npm/dt/nest-notion?style=flat-square)

Nest module for using the [Notion API](https://developers.notion.com/).

## Install

### NPM

```sh
npm i nest-notion
```

### Yarn

```sh
yarn add nest-notion
```

## Usage

In `app.module.ts`:

```ts
import { NotionModule } from 'nest-notion';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ // Need this to use process.env.NOTION_SECRET if it is in .env
      isGlobal: true,
    }),
    NotionModule.forRoot({
      auth: process.env.NOTION_SECRET,
    }),
    VegetableModule,
  ],
})
export class AppModule {}
```

An example module you wish to use it in:

```ts
import { Module } from '@nestjs/common';
import { VegetableService } from './vegetable.service';

@Module({
  providers: [VegetableService],
  exports: [
    VegetableService,
  ],
})
export class VegetableModule {}

```

In the service within the module:

```ts
import { Injectable } from '@nestjs/common';
import { NotionService } from 'nest-notion';

@Injectable()
export class VegetableService {
  constructor(
    private readonly notionService: NotionService
  ) { }

  listUsers() {
    return this.notionService.notion.users.list({ page_size: 10 });
  }
}

```