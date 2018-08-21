export class TreeNode {
    name: string;
    id: string;
    data: any;
    hasPermission: boolean;
    expanded: boolean;
    checked: boolean;
    class: string;
    children: any;
    enabled:boolean;
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.class = "";
        this.expanded = false;
        this.checked = false;
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    check() {
        let newState = !this.checked;
        this.checked = newState;
        //  this.checkRecursive(newState);
    }
    checkRecursive(state) {
        if (this.data) {
            this.data.forEach(d => {
                d.checked = state;
                d.checkRecursive(state);
            })
        }
    }
}