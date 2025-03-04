interface FileSystemElement {
  showDetails: (indent?: string) => void;
}

class File implements FileSystemElement {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public showDetails(indent: string = ''): void {
    console.log(`${indent}- File: ${this.name}`);
  }
}

class Folder implements FileSystemElement {
  private name: string;
  private elements: FileSystemElement[];

  constructor(name: string) {
    this.name = name;
    this.elements = [];
  }

  public showDetails(indent: string = ''): void {
    console.log(`${indent}+ Folder: ${this.name}`);
    this.elements.forEach((element) => element.showDetails(`${indent} `));
  }

  public add(element: FileSystemElement) {
    this.elements.push(element);
  }
}

function main() {
  const file1 = new File('file1.txt');
  const file2 = new File('file2.txt');
  const file3 = new File('file3.txt');
  const file4 = new File('file4.txt');

  const folder1 = new Folder('folder-1');
  folder1.add(file1);
  folder1.add(file2);

  const folder2 = new Folder('folder-2');
  folder2.add(file3);

  const folder3 = new Folder('folder-3');
  folder3.add(file4);
  folder2.add(folder3);

  const rootFolder = new Folder('root-folder');
  rootFolder.add(folder1);
  rootFolder.add(folder2);
  rootFolder.showDetails();
}

main();
