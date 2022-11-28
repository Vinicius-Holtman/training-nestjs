import { DataSource } from 'typeorm';
import { CreateCoursesTable1669656673434 } from './migrations/1669656673434-CreateCoursesTable';
import { CreateTagsTable1669657290677 } from './migrations/1669657290677-CreateTagsTable';
import { CreateCoursesTagsTable1669661327729 } from './migrations/1669661327729-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1669661588521 } from './migrations/1669661588521-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1669661863188 } from './migrations/1669661863188-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1669656673434,
    CreateTagsTable1669657290677,
    CreateCoursesTagsTable1669661327729,
    AddCoursesIdToCoursesTagsTable1669661588521,
    AddTagsIdToCoursesTagsTable1669661863188,
  ],
});
