class Model {
    constructor(createFile) {
        this.usersDb = [];
        this.createFile = createFile;
    }

    addUserToDb = signals => {
        const signalsWithDate = {
            date: new Date(),
            ...signals,
        }
        this.usersDb.push(signalsWithDate);
        console.log('this.usersDb', this.usersDb.length);
        this.createNewFile();
    };

    createNewFile = () => {
        this.createFile(this.usersDb).then(() => console.log('SUCCESS'));
    };
}

module.exports = Model;
