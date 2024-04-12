import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnAvatarToAccount1708298943255 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const isColumnExist = await queryRunner.hasColumn("account", "avatar");
    
    if (!isColumnExist) {
      await queryRunner.addColumn(
        'account',
        new TableColumn({
          name: 'avatar',
          type: 'varchar',
          isNullable: true,
        })
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('account', 'avatar');
  }
}
