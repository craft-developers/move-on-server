import { MigrationInterface, QueryRunner } from 'typeorm';

export class Manager1703904909628 implements MigrationInterface {
  name = 'Manager1703904909628';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`manager\` (\`ID\` varchar(36) NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NULL, \`deleted_at\` bigint NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`account_status\` enum ('Active', 'In Active', 'Suspended', 'Closed') NOT NULL, \`last_sign_in\` int NULL, UNIQUE INDEX \`IDX_ee8fba4edb704ce2465753a2ed\` (\`email\`), PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`manager\``);
  }
}
