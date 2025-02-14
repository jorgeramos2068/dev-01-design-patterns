import { COLORS } from '@/helpers';

class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  public select(...fields: string[]): QueryBuilder {
    this.fields = fields.length > 0 ? fields : ['*'];
    return this;
  }

  public where(condition: string): QueryBuilder {
    this.conditions.push(condition);
    return this;
  }

  public orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
    this.orderFields.push(`${field} ${direction}`);
    return this;
  }

  public limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  public execute(): string {
    const fields = this.fields.length > 0 ? this.fields.join(', ') : '*';
    const whereClause = this.conditions.length > 0 ? `WHERE ${this.conditions.join(' AND ')}` : '';
    const orderByClause = this.orderFields.length > 0 ? `ORDER BY ${this.orderFields.join(', ')}` : '';
    const limitClause = this.limitCount ? `LIMIT ${this.limitCount}` : '';
    return `SELECT ${fields} FROM ${this.table} ${whereClause} ${orderByClause} ${limitClause}`;
  }
}

function main() {
  const usersQuery = new QueryBuilder('users')
    .select('id', 'name', 'email')
    .where('age > 20')
    .where("country = 'MEX'")
    .orderBy('name', 'ASC')
    .orderBy('age', 'DESC')
    .limit(100)
    .execute();
  console.log('%cQuery:', COLORS.red);
  console.log(usersQuery);

  const employeesQuery = new QueryBuilder('users')
    .select()
    .where('id > 0')
    .where("country = 'MEX'")
    .orderBy('name', 'ASC')
    .orderBy('age', 'DESC')
    .limit(10)
    .execute();
  console.log('%cQuery:', COLORS.red);
  console.log(employeesQuery);
}

main();
