export default class List {
    todes = []

    addList(description) {
        const list = {
            description,
            completed: false,
            index: this.todes.length + 1,
        }
        this.todes.push(list)
        this.saveList()
    }

    completeList(s, index) {
        this.todes[index - 1].completed = s;
        this.saveList();
    }

    clearCompleted() {
        this.todes = this.todes.filter(
          (item) => item.completed === false,
        );
        this.upToDate();
        this.saveList();
    }

    clearAll() {
        this.todes.splice(0, this.todes.length);
        this.saveList();
    }

    saveList() {
        const store = JSON.stringify(this.todes);
        localStorage.setItem('store', store);
    }

    getsaveList() {
        this.todes = JSON.parse(
          localStorage.getItem('store'),
        );
    }
    itemRemove(i) {
        this.todes.splice(i - 1, 1);
        this.upToDate();
        this.saveList();
    }
    upToDate() {
        this.todes.map((items) => {
          items.index = this.todes.indexOf(items) + 1;
          return items;
        });
    }
    edit(paragraph, i) {
        this.todes[i - 1].description = paragraph.textContent;
        this.saveList();
    }
}