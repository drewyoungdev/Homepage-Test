/*
Summary
Event model to give parent homepage.component.ts instructions on how to handle homepage item.
*/
export interface HomepageItemCompletedEvent {
    isMainHomepageItem: boolean
    hasError: boolean
    hideHomepageItem: boolean
    title: string
    position: HomepageItemPosition
}

/*
Summary
Perhaps we want to emit the positin of the homepage item when it completes.
This could help drive more view logic depending on how many items from each column/row have completed
*/
export interface HomepageItemPosition {
    columnNumber: number
    rowNumber: number
}
