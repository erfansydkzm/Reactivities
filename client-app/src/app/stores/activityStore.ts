import { makeObservable, observable } from 'mobx';


export default class ActivityStore {
    title = "Hello Word";
    constructor() {
        makeObservable(this, {
            title: observable
        })
    }
}