import { Migration } from '@mikro-orm/migrations';

export class Migration20200927064543 extends Migration {
    async up(): Promise<void> {
        this.addSql(
            'create table "game" ("id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "name" varchar(255) not null);'
        );
    }
}
