export class AppReducer {
    static CHANGE_FIELD = (prevState: any, payload: any) => {
        console.log(prevState);
        return {
            ...prevState,
            [payload.field]: payload.value,
        };
    }

    static CALCULATE = (prevState: any) => {
        const height = +prevState.height / 100;
        console.log(prevState);
        const currentHistorys = { ...prevState };
        delete currentHistorys.history;
        const date = new Date();
        return {
            ...prevState,
            history: [
                ...prevState.history,
                {
                    ...currentHistorys,
                    date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}}`,
                },
            ],
            imc: +prevState.weigth / (height * height),
        };
    }
}

export const reducer = (
    prevState: any,
    action: { type: keyof typeof AppReducer; payload: any }
) => {
    const run = AppReducer[action.type];
    if (typeof run !== "function") return prevState;
    return run(prevState, action.payload);
};