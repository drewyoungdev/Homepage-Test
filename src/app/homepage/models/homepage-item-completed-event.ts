/*
Summary
Event model to give parent homepage.component.ts instructions on how to handle homepage item.
*/
export interface HomepageItemCompletedEvent {
    isMainHomepageItem: boolean
    hasError: boolean
    hideHomepageItem: boolean
    title: string
}
