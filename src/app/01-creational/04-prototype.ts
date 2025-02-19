class Document {
  public title: string;
  private content: string;
  public author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  public display() {
    console.log(`Title: ${this.title}`);
    console.log(`Content: ${this.content}`);
    console.log(`Author: ${this.author}`);
  }

  public clone(): Document {
    return new Document(this.title, this.content, this.author);
  }
}

function main() {
  const document1 = new Document('Title 1', 'Content 1', 'Author 1');
  console.log({ document1 });
  document1.display();
  console.log('\n');

  const document2 = document1.clone();
  document2.title = 'Title 2';
  console.log({ document2 });
  document2.display();
}

main();
