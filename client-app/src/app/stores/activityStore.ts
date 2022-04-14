import { action, makeObservable, observable } from 'mobx';


export default class ActivityStore {
    title = "Hello Word";
    constructor() {
        makeObservable(this, {
            title: observable,
            setTitle: action
        })
    }

    setTitle = () => {
        this.title = 'new content';
    }
}