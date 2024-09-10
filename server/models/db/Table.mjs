class Table{
    static async getColumns() {
        throw new Error("Method 'getColumns()' must be implemented.");
    }

    static async get() {
        throw new Error("Method 'get()' must be implemented.");
    }

    static async getById(Id) {
        throw new Error("Method 'getById(Id)' must be implemented.");
    }
}

export default Table