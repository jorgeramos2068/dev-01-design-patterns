class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsaveChanges: boolean;

  constructor(content: string, cursorPosition: number, unsaveChanges: boolean) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsaveChanges = unsaveChanges;
  }

  public display() {
    console.log(`Content: ${this.content}`);
    console.log(`Cursor position: ${this.cursorPosition}`);
    console.log(`Unsave changes: ${this.unsaveChanges}\n`);
  }

  public copyWith({ content, cursorPosition, unsaveChanges }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsaveChanges ?? this.unsaveChanges
    );
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number = -1;

  public save(state: CodeEditorState): void {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.splice(0, this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex++;
  }

  public redo(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }

  public undo(): CodeEditorState | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    return null;
  }
}

function main() {
  const history = new CodeEditorHistory();
  let editorState = new CodeEditorState('', 1, false);

  console.log('Inicial state:');
  history.save(editorState);
  editorState.display();

  console.log('State 1:');
  editorState = editorState.copyWith({
    content: "console.log('Hello World');",
    cursorPosition: 2,
    unsaveChanges: true,
  });
  history.save(editorState);
  editorState.display();

  console.log('State 2:');
  editorState = editorState.copyWith({
    cursorPosition: 3,
  });
  history.save(editorState);
  editorState.display();

  console.log('After Undo');
  editorState = history.undo();
  editorState.display();

  console.log('After Redo');
  editorState = history.redo();
  editorState.display();
}

main();
