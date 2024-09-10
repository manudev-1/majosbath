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

    static async post(...values) {
        throw new Error("Method 'post(...values)' must be implemented.");
    }

    static async post(Id, ...values) {
        throw new Error("Method 'put(Id, ...values)' must be implemented.");
    }

    static async delete(Id) {
        throw new Error("Method 'delete(Id)' must be implemented.");
    }
}

export default Table