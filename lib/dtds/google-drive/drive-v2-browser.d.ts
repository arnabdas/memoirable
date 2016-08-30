// Type definitions for Google Drive API v2
// Project: https://developers.google.com/drive/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/drive
//   View and manage the files in your Google Drive
// https://www.googleapis.com/auth/drive.appdata
//   View and manage its own configuration data in your Google Drive
// https://www.googleapis.com/auth/drive.apps.readonly
//   View your Google Drive apps
// https://www.googleapis.com/auth/drive.file
//   View and manage Google Drive files and folders that you have opened or created with this app
// https://www.googleapis.com/auth/drive.metadata
//   View and manage metadata of files in your Google Drive
// https://www.googleapis.com/auth/drive.metadata.readonly
//   View metadata for files in your Google Drive
// https://www.googleapis.com/auth/drive.photos.readonly
//   View the photos, videos and albums in your Google Photos
// https://www.googleapis.com/auth/drive.readonly
//   View the files in your Google Drive
// https://www.googleapis.com/auth/drive.scripts
//   Modify your Google Apps Script scripts' behavior

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
     */
    module drive {
        var about: {
            /**
             * Gets the information about the current user along with Drive API settings
             * @params {boolean} includeSubscribed When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.
             * @params {string} maxChangeIdCount Maximum number of remaining change IDs to count
             * @params {string} startChangeId Change ID to start counting from when calculating number of remaining change IDs
             */
            get: (params: {
                includeSubscribed?: boolean;
                maxChangeIdCount?: string;
                startChangeId?: string;
            }) => {
                execute(callback: (data: IResponse<IAbout>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAbout>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAbout>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAbout>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAbout>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAbout>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAbout>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var apps: {
            /**
             * Gets a specific app.
             * @params {string} appId The ID of the app.
             */
            get: (params: {
                appId: string;
            }) => {
                execute(callback: (data: IResponse<IApp>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IApp>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IApp>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IApp>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IApp>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IApp>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IApp>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists a user's installed apps.
             * @params {string} appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
             * @params {string} appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
             * @params {string} languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
             */
            list: (params: {
                appFilterExtensions?: string;
                appFilterMimeTypes?: string;
                languageCode?: string;
            }) => {
                execute(callback: (data: IResponse<IAppList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAppList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAppList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAppList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAppList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAppList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAppList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var changes: {
            /**
             * Gets a specific change.
             * @params {string} changeId The ID of the change.
             */
            get: (params: {
                changeId: string;
            }) => {
                execute(callback: (data: IResponse<IChange>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IChange>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChange>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChange>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChange>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChange>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChange>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists the changes for a user.
             * @params {boolean} includeDeleted Whether to include deleted items.
             * @params {boolean} includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
             * @params {number} maxResults Maximum number of changes to return.
             * @params {string} pageToken Page token for changes.
             * @params {string} spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
             * @params {string} startChangeId Change ID to start listing changes from.
             */
            list: (params: {
                includeDeleted?: boolean;
                includeSubscribed?: boolean;
                maxResults?: number;
                pageToken?: string;
                spaces?: string;
                startChangeId?: string;
            }) => {
                execute(callback: (data: IResponse<IChangeList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IChangeList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChangeList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChangeList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChangeList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChangeList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChangeList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Subscribe to changes for a user.
             * @params {boolean} includeDeleted Whether to include deleted items.
             * @params {boolean} includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
             * @params {number} maxResults Maximum number of changes to return.
             * @params {string} pageToken Page token for changes.
             * @params {string} spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
             * @params {string} startChangeId Change ID to start listing changes from.
             */
            watch: (params: {
                includeDeleted?: boolean;
                includeSubscribed?: boolean;
                maxResults?: number;
                pageToken?: string;
                spaces?: string;
                startChangeId?: string;
                resource?: IChannel;
            }) => {
                execute(callback: (data: IResponse<IChannel>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var channels: {
            /**
             * Stop watching resources through this channel
             */
            stop: (params: {
                resource?: IChannel;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var children: {
            /**
             * Removes a child from a folder.
             * @params {string} childId The ID of the child.
             * @params {string} folderId The ID of the folder.
             */
            delete: (params: {
                childId: string;
                folderId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a specific child reference.
             * @params {string} childId The ID of the child.
             * @params {string} folderId The ID of the folder.
             */
            get: (params: {
                childId: string;
                folderId: string;
            }) => {
                execute(callback: (data: IResponse<IChildReference>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Inserts a file into a folder.
             * @params {string} folderId The ID of the folder.
             */
            insert: (params: {
                folderId: string;
                resource?: IChildReference;
            }) => {
                execute(callback: (data: IResponse<IChildReference>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists a folder's children.
             * @params {string} folderId The ID of the folder.
             * @params {number} maxResults Maximum number of children to return.
             * @params {string} orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
             * @params {string} pageToken Page token for children.
             * @params {string} q Query string for searching children.
             */
            list: (params: {
                folderId: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                q?: string;
            }) => {
                execute(callback: (data: IResponse<IChildList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChildList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var comments: {
            /**
             * Deletes a comment.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             */
            delete: (params: {
                commentId: string;
                fileId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a comment by ID.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             * @params {boolean} includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
             */
            get: (params: {
                commentId: string;
                fileId: string;
                includeDeleted?: boolean;
            }) => {
                execute(callback: (data: IResponse<IComment>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Creates a new comment on the given file.
             * @params {string} fileId The ID of the file.
             */
            insert: (params: {
                fileId: string;
                resource?: IComment;
            }) => {
                execute(callback: (data: IResponse<IComment>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists a file's comments.
             * @params {string} fileId The ID of the file.
             * @params {boolean} includeDeleted If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
             * @params {number} maxResults The maximum number of discussions to include in the response, used for paging.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} updatedMin Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
             */
            list: (params: {
                fileId: string;
                includeDeleted?: boolean;
                maxResults?: number;
                pageToken?: string;
                updatedMin?: string;
            }) => {
                execute(callback: (data: IResponse<ICommentList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates an existing comment. This method supports patch semantics.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             */
            patch: (params: {
                commentId: string;
                fileId: string;
                resource?: IComment;
            }) => {
                execute(callback: (data: IResponse<IComment>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates an existing comment.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             */
            update: (params: {
                commentId: string;
                fileId: string;
                resource?: IComment;
            }) => {
                execute(callback: (data: IResponse<IComment>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var files: {
            /**
             * Creates a copy of the specified file.
             * @params {boolean} convert Whether to convert this file to the corresponding Google Docs format.
             * @params {string} fileId The ID of the file to copy.
             * @params {boolean} ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
             * @params {string} ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
             * @params {boolean} pinned Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
             * @params {string} timedTextLanguage The language of the timed text.
             * @params {string} timedTextTrackName The timed text track name.
             * @params {string} visibility The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
             */
            copy: (params: {
                convert?: boolean;
                fileId: string;
                ocr?: boolean;
                ocrLanguage?: string;
                pinned?: boolean;
                timedTextLanguage?: string;
                timedTextTrackName?: string;
                visibility?: string;
                resource?: IFile;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file.
             * @params {string} fileId The ID of the file to delete.
             */
            delete: (params: {
                fileId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Permanently deletes all of the user's trashed files.
             */
            emptyTrash: (params: {
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Exports a Google Doc to the requested MIME type and returns the exported content.
             * @params {string} fileId The ID of the file.
             * @params {string} mimeType The MIME type of the format requested for this export.
             */
            export: (params: {
                fileId: string;
                mimeType: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Generates a set of file IDs which can be provided in insert requests.
             * @params {number} maxResults Maximum number of IDs to return.
             * @params {string} space The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
             */
            generateIds: (params: {
                maxResults?: number;
                space?: string;
            }) => {
                execute(callback: (data: IResponse<IGeneratedIds>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IGeneratedIds>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGeneratedIds>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGeneratedIds>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGeneratedIds>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGeneratedIds>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IGeneratedIds>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a file's metadata by ID.
             * @params {boolean} acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
             * @params {string} fileId The ID for the file in question.
             * @params {string} projection This parameter is deprecated and has no function.
             * @params {string} revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
             * @params {boolean} updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
             */
            get: (params: {
                acknowledgeAbuse?: boolean;
                fileId: string;
                projection?: string;
                revisionId?: string;
                updateViewedDate?: boolean;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Insert a new file.
             * @params {boolean} convert Whether to convert this file to the corresponding Google Docs format.
             * @params {boolean} ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
             * @params {string} ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
             * @params {boolean} pinned Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
             * @params {string} timedTextLanguage The language of the timed text.
             * @params {string} timedTextTrackName The timed text track name.
             * @params {boolean} useContentAsIndexableText Whether to use the content as indexable text.
             * @params {string} visibility The visibility of the new file. This parameter is only relevant when convert=false.
             */
            insert: (params: {
                convert?: boolean;
                ocr?: boolean;
                ocrLanguage?: string;
                pinned?: boolean;
                timedTextLanguage?: string;
                timedTextTrackName?: string;
                useContentAsIndexableText?: boolean;
                visibility?: string;
                resource?: IFile;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists the user's files.
             * @params {string} corpus The body of items (files/documents) to which the query applies.
             * @params {number} maxResults Maximum number of files to return.
             * @params {string} orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
             * @params {string} pageToken Page token for files.
             * @params {string} projection This parameter is deprecated and has no function.
             * @params {string} q Query string for searching files.
             * @params {string} spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
             */
            list: (params: {
                corpus?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                projection?: string;
                q?: string;
                spaces?: string;
            }) => {
                execute(callback: (data: IResponse<IFileList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFileList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates file metadata and/or content. This method supports patch semantics.
             * @params {string} addParents Comma-separated list of parent IDs to add.
             * @params {boolean} convert This parameter is deprecated and has no function.
             * @params {string} fileId The ID of the file to update.
             * @params {string} modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
             * @params {boolean} newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
             * @params {boolean} ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
             * @params {string} ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
             * @params {boolean} pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
             * @params {string} removeParents Comma-separated list of parent IDs to remove.
             * @params {boolean} setModifiedDate Whether to set the modified date with the supplied modified date.
             * @params {string} timedTextLanguage The language of the timed text.
             * @params {string} timedTextTrackName The timed text track name.
             * @params {boolean} updateViewedDate Whether to update the view date after successfully updating the file.
             * @params {boolean} useContentAsIndexableText Whether to use the content as indexable text.
             */
            patch: (params: {
                addParents?: string;
                convert?: boolean;
                fileId: string;
                modifiedDateBehavior?: string;
                newRevision?: boolean;
                ocr?: boolean;
                ocrLanguage?: string;
                pinned?: boolean;
                removeParents?: string;
                setModifiedDate?: boolean;
                timedTextLanguage?: string;
                timedTextTrackName?: string;
                updateViewedDate?: boolean;
                useContentAsIndexableText?: boolean;
                resource?: IFile;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Set the file's updated time to the current server time.
             * @params {string} fileId The ID of the file to update.
             */
            touch: (params: {
                fileId: string;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Moves a file to the trash. The currently authenticated user must own the file.
             * @params {string} fileId The ID of the file to trash.
             */
            trash: (params: {
                fileId: string;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Restores a file from the trash.
             * @params {string} fileId The ID of the file to untrash.
             */
            untrash: (params: {
                fileId: string;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates file metadata and/or content.
             * @params {string} addParents Comma-separated list of parent IDs to add.
             * @params {boolean} convert This parameter is deprecated and has no function.
             * @params {string} fileId The ID of the file to update.
             * @params {string} modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
             * @params {boolean} newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
             * @params {boolean} ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
             * @params {string} ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
             * @params {boolean} pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
             * @params {string} removeParents Comma-separated list of parent IDs to remove.
             * @params {boolean} setModifiedDate Whether to set the modified date with the supplied modified date.
             * @params {string} timedTextLanguage The language of the timed text.
             * @params {string} timedTextTrackName The timed text track name.
             * @params {boolean} updateViewedDate Whether to update the view date after successfully updating the file.
             * @params {boolean} useContentAsIndexableText Whether to use the content as indexable text.
             */
            update: (params: {
                addParents?: string;
                convert?: boolean;
                fileId: string;
                modifiedDateBehavior?: string;
                newRevision?: boolean;
                ocr?: boolean;
                ocrLanguage?: string;
                pinned?: boolean;
                removeParents?: string;
                setModifiedDate?: boolean;
                timedTextLanguage?: string;
                timedTextTrackName?: string;
                updateViewedDate?: boolean;
                useContentAsIndexableText?: boolean;
                resource?: IFile;
            }) => {
                execute(callback: (data: IResponse<IFile>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IFile>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Subscribe to changes on a file
             * @params {boolean} acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
             * @params {string} fileId The ID for the file in question.
             * @params {string} projection This parameter is deprecated and has no function.
             * @params {string} revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
             * @params {boolean} updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
             */
            watch: (params: {
                acknowledgeAbuse?: boolean;
                fileId: string;
                projection?: string;
                revisionId?: string;
                updateViewedDate?: boolean;
                resource?: IChannel;
            }) => {
                execute(callback: (data: IResponse<IChannel>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var parents: {
            /**
             * Removes a parent from a file.
             * @params {string} fileId The ID of the file.
             * @params {string} parentId The ID of the parent.
             */
            delete: (params: {
                fileId: string;
                parentId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a specific parent reference.
             * @params {string} fileId The ID of the file.
             * @params {string} parentId The ID of the parent.
             */
            get: (params: {
                fileId: string;
                parentId: string;
            }) => {
                execute(callback: (data: IResponse<IParentReference>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Adds a parent folder for a file.
             * @params {string} fileId The ID of the file.
             */
            insert: (params: {
                fileId: string;
                resource?: IParentReference;
            }) => {
                execute(callback: (data: IResponse<IParentReference>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentReference>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists a file's parents.
             * @params {string} fileId The ID of the file.
             */
            list: (params: {
                fileId: string;
            }) => {
                execute(callback: (data: IResponse<IParentList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IParentList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var permissions: {
            /**
             * Deletes a permission from a file.
             * @params {string} fileId The ID for the file.
             * @params {string} permissionId The ID for the permission.
             */
            delete: (params: {
                fileId: string;
                permissionId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a permission by ID.
             * @params {string} fileId The ID for the file.
             * @params {string} permissionId The ID for the permission.
             */
            get: (params: {
                fileId: string;
                permissionId: string;
            }) => {
                execute(callback: (data: IResponse<IPermission>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Returns the permission ID for an email address.
             * @params {string} email The email address for which to return a permission ID
             */
            getIdForEmail: (params: {
                email: string;
            }) => {
                execute(callback: (data: IResponse<IPermissionId>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionId>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionId>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionId>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionId>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionId>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionId>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Inserts a permission for a file.
             * @params {string} emailMessage A custom message to include in notification emails.
             * @params {string} fileId The ID for the file.
             * @params {boolean} sendNotificationEmails Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
             */
            insert: (params: {
                emailMessage?: string;
                fileId: string;
                sendNotificationEmails?: boolean;
                resource?: IPermission;
            }) => {
                execute(callback: (data: IResponse<IPermission>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists a file's permissions.
             * @params {string} fileId The ID for the file.
             */
            list: (params: {
                fileId: string;
            }) => {
                execute(callback: (data: IResponse<IPermissionList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermissionList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a permission using patch semantics.
             * @params {string} fileId The ID for the file.
             * @params {string} permissionId The ID for the permission.
             * @params {boolean} removeExpiration Whether to remove the expiration date.
             * @params {boolean} transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
             */
            patch: (params: {
                fileId: string;
                permissionId: string;
                removeExpiration?: boolean;
                transferOwnership?: boolean;
                resource?: IPermission;
            }) => {
                execute(callback: (data: IResponse<IPermission>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a permission.
             * @params {string} fileId The ID for the file.
             * @params {string} permissionId The ID for the permission.
             * @params {boolean} removeExpiration Whether to remove the expiration date.
             * @params {boolean} transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
             */
            update: (params: {
                fileId: string;
                permissionId: string;
                removeExpiration?: boolean;
                transferOwnership?: boolean;
                resource?: IPermission;
            }) => {
                execute(callback: (data: IResponse<IPermission>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPermission>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var properties: {
            /**
             * Deletes a property.
             * @params {string} fileId The ID of the file.
             * @params {string} propertyKey The key of the property.
             * @params {string} visibility The visibility of the property.
             */
            delete: (params: {
                fileId: string;
                propertyKey: string;
                visibility?: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a property by its key.
             * @params {string} fileId The ID of the file.
             * @params {string} propertyKey The key of the property.
             * @params {string} visibility The visibility of the property.
             */
            get: (params: {
                fileId: string;
                propertyKey: string;
                visibility?: string;
            }) => {
                execute(callback: (data: IResponse<IProperty>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Adds a property to a file, or updates it if it already exists.
             * @params {string} fileId The ID of the file.
             */
            insert: (params: {
                fileId: string;
                resource?: IProperty;
            }) => {
                execute(callback: (data: IResponse<IProperty>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists a file's properties.
             * @params {string} fileId The ID of the file.
             */
            list: (params: {
                fileId: string;
            }) => {
                execute(callback: (data: IResponse<IPropertyList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPropertyList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPropertyList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPropertyList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPropertyList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPropertyList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPropertyList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a property, or adds it if it doesn't exist. This method supports patch semantics.
             * @params {string} fileId The ID of the file.
             * @params {string} propertyKey The key of the property.
             * @params {string} visibility The visibility of the property.
             */
            patch: (params: {
                fileId: string;
                propertyKey: string;
                visibility?: string;
                resource?: IProperty;
            }) => {
                execute(callback: (data: IResponse<IProperty>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a property, or adds it if it doesn't exist.
             * @params {string} fileId The ID of the file.
             * @params {string} propertyKey The key of the property.
             * @params {string} visibility The visibility of the property.
             */
            update: (params: {
                fileId: string;
                propertyKey: string;
                visibility?: string;
                resource?: IProperty;
            }) => {
                execute(callback: (data: IResponse<IProperty>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IProperty>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var realtime: {
            /**
             * Exports the contents of the Realtime API data model associated with this file as JSON.
             * @params {string} fileId The ID of the file that the Realtime API data model is associated with.
             * @params {number} revision The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
             */
            get: (params: {
                fileId: string;
                revision?: number;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Overwrites the Realtime API data model associated with this file with the provided JSON data model.
             * @params {string} baseRevision The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
             * @params {string} fileId The ID of the file that the Realtime API data model is associated with.
             */
            update: (params: {
                baseRevision?: string;
                fileId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var replies: {
            /**
             * Deletes a reply.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             * @params {string} replyId The ID of the reply.
             */
            delete: (params: {
                commentId: string;
                fileId: string;
                replyId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a reply.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             * @params {boolean} includeDeleted If set, this will succeed when retrieving a deleted reply.
             * @params {string} replyId The ID of the reply.
             */
            get: (params: {
                commentId: string;
                fileId: string;
                includeDeleted?: boolean;
                replyId: string;
            }) => {
                execute(callback: (data: IResponse<ICommentReply>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Creates a new reply to the given comment.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             */
            insert: (params: {
                commentId: string;
                fileId: string;
                resource?: ICommentReply;
            }) => {
                execute(callback: (data: IResponse<ICommentReply>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists all of the replies to a comment.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             * @params {boolean} includeDeleted If set, all replies, including deleted replies (with content stripped) will be returned.
             * @params {number} maxResults The maximum number of replies to include in the response, used for paging.
             * @params {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                commentId: string;
                fileId: string;
                includeDeleted?: boolean;
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<ICommentReplyList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReplyList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReplyList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReplyList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReplyList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReplyList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReplyList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates an existing reply. This method supports patch semantics.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             * @params {string} replyId The ID of the reply.
             */
            patch: (params: {
                commentId: string;
                fileId: string;
                replyId: string;
                resource?: ICommentReply;
            }) => {
                execute(callback: (data: IResponse<ICommentReply>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates an existing reply.
             * @params {string} commentId The ID of the comment.
             * @params {string} fileId The ID of the file.
             * @params {string} replyId The ID of the reply.
             */
            update: (params: {
                commentId: string;
                fileId: string;
                replyId: string;
                resource?: ICommentReply;
            }) => {
                execute(callback: (data: IResponse<ICommentReply>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentReply>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var revisions: {
            /**
             * Removes a revision.
             * @params {string} fileId The ID of the file.
             * @params {string} revisionId The ID of the revision.
             */
            delete: (params: {
                fileId: string;
                revisionId: string;
            }) => {
                execute(callback: (data:any, original: string) => void):void;// void
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<any>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Gets a specific revision.
             * @params {string} fileId The ID of the file.
             * @params {string} revisionId The ID of the revision.
             */
            get: (params: {
                fileId: string;
                revisionId: string;
            }) => {
                execute(callback: (data: IResponse<IRevision>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Lists a file's revisions.
             * @params {string} fileId The ID of the file.
             */
            list: (params: {
                fileId: string;
            }) => {
                execute(callback: (data: IResponse<IRevisionList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevisionList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevisionList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevisionList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevisionList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevisionList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevisionList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a revision. This method supports patch semantics.
             * @params {string} fileId The ID for the file.
             * @params {string} revisionId The ID for the revision.
             */
            patch: (params: {
                fileId: string;
                revisionId: string;
                resource?: IRevision;
            }) => {
                execute(callback: (data: IResponse<IRevision>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates a revision.
             * @params {string} fileId The ID for the file.
             * @params {string} revisionId The ID for the revision.
             */
            update: (params: {
                fileId: string;
                revisionId: string;
                resource?: IRevision;
            }) => {
                execute(callback: (data: IResponse<IRevision>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IRevision>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        /**
         * An item with user information and settings.
         */
        interface IAbout {
            /**
             * Information about supported additional roles per file type. The most specific type takes precedence.
             */
            additionalRoleInfo: {
                roleSets: {
                    additionalRoles: string[];
                    primaryRole: string;
                }[];
                type: string;
            }[];
            /**
             * The domain sharing policy for the current user. Possible values are:  
             * - allowed 
             * - allowedWithWarning 
             * - incomingOnly 
             * - disallowed
             */
            domainSharingPolicy: string;
            /**
             * The ETag of the item.
             */
            etag: string;
            /**
             * The allowable export formats.
             */
            exportFormats: {
                source: string;
                targets: string[];
            }[];
            /**
             * List of additional features enabled on this account.
             */
            features: {
                featureName: string;
                featureRate: number; // double
            }[];
            /**
             * The palette of allowable folder colors as RGB hex strings.
             */
            folderColorPalette: string[];
            /**
             * The allowable import formats.
             */
            importFormats: {
                source: string;
                targets: string[];
            }[];
            /**
             * A boolean indicating whether the authenticated app is installed by the authenticated user.
             */
            isCurrentAppInstalled: boolean;
            /**
             * This is always drive#about.
             */
            kind: string;
            /**
             * The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
             */
            languageCode: string;
            /**
             * The largest change id.
             */
            largestChangeId: string; // int64
            /**
             * List of max upload sizes for each file type. The most specific type takes precedence.
             */
            maxUploadSizes: {
                size: string; // int64
                type: string;
            }[];
            /**
             * The name of the current user.
             */
            name: string;
            /**
             * The current user's ID as visible in the permissions collection.
             */
            permissionId: string;
            /**
             * The amount of storage quota used by different Google services.
             */
            quotaBytesByService: {
                bytesUsed: string; // int64
                serviceName: string;
            }[];
            /**
             * The total number of quota bytes.
             */
            quotaBytesTotal: string; // int64
            /**
             * The number of quota bytes used by Google Drive.
             */
            quotaBytesUsed: string; // int64
            /**
             * The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
             */
            quotaBytesUsedAggregate: string; // int64
            /**
             * The number of quota bytes used by trashed items.
             */
            quotaBytesUsedInTrash: string; // int64
            /**
             * The type of the user's storage quota. Possible values are:  
             * - LIMITED 
             * - UNLIMITED
             */
            quotaType: string;
            /**
             * The number of remaining change ids, limited to no more than 2500.
             */
            remainingChangeIds: string; // int64
            /**
             * The id of the root folder.
             */
            rootFolderId: string;
            /**
             * A link back to this item.
             */
            selfLink: string;
            /**
             * The authenticated user.
             */
            user: IUser;
        }
        /**
         * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
         */
        interface IApp {
            /**
             * Whether the app is authorized to access data on the user's Drive.
             */
            authorized: boolean;
            /**
             * The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.
             */
            createInFolderTemplate: string;
            /**
             * The url to create a new file with this app.
             */
            createUrl: string;
            /**
             * Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.
             */
            hasDriveWideScope: boolean;
            /**
             * The various icons for the app.
             */
            icons: {
                category: string;
                iconUrl: string;
                size: number; // int32
            }[];
            /**
             * The ID of the app.
             */
            id: string;
            /**
             * Whether the app is installed.
             */
            installed: boolean;
            /**
             * This is always drive#app.
             */
            kind: string;
            /**
             * A long description of the app.
             */
            longDescription: string;
            /**
             * The name of the app.
             */
            name: string;
            /**
             * The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
             */
            objectType: string;
            /**
             * The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open Files  for the full documentation.
             */
            openUrlTemplate: string;
            /**
             * The list of primary file extensions.
             */
            primaryFileExtensions: string[];
            /**
             * The list of primary mime types.
             */
            primaryMimeTypes: string[];
            /**
             * The ID of the product listing for this app.
             */
            productId: string;
            /**
             * A link to the product listing for this app.
             */
            productUrl: string;
            /**
             * The list of secondary file extensions.
             */
            secondaryFileExtensions: string[];
            /**
             * The list of secondary mime types.
             */
            secondaryMimeTypes: string[];
            /**
             * A short description of the app.
             */
            shortDescription: string;
            /**
             * Whether this app supports creating new objects.
             */
            supportsCreate: boolean;
            /**
             * Whether this app supports importing Google Docs.
             */
            supportsImport: boolean;
            /**
             * Whether this app supports opening more than one file.
             */
            supportsMultiOpen: boolean;
            /**
             * Whether this app supports creating new files when offline.
             */
            supportsOfflineCreate: boolean;
            /**
             * Whether the app is selected as the default handler for the types it supports.
             */
            useByDefault: boolean;
        }
        /**
         * A list of third-party applications which the user has installed or given access to Google Drive.
         */
        interface IAppList {
            /**
             * List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
             */
            defaultAppIds: string[];
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The actual list of apps.
             */
            items: IApp[];
            /**
             * This is always drive#appList.
             */
            kind: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * Representation of a change to a file.
         */
        interface IChange {
            /**
             * Whether the file has been deleted.
             */
            deleted: boolean;
            /**
             * The updated state of the file. Present if the file has not been deleted.
             */
            file: IFile;
            /**
             * The ID of the file associated with this change.
             */
            fileId: string;
            /**
             * The ID of the change.
             */
            id: string; // int64
            /**
             * This is always drive#change.
             */
            kind: string;
            /**
             * The time of this modification.
             */
            modificationDate: string; // date-time
            /**
             * A link back to this change.
             */
            selfLink: string;
        }
        /**
         * A list of changes for a user.
         */
        interface IChangeList {
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The actual list of changes.
             */
            items: IChange[];
            /**
             * This is always drive#changeList.
             */
            kind: string;
            /**
             * The current largest change ID.
             */
            largestChangeId: string; // int64
            /**
             * A link to the next page of changes.
             */
            nextLink: string;
            /**
             * The page token for the next page of changes.
             */
            nextPageToken: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * An notification channel used to watch for resource changes.
         */
        interface IChannel {
            /**
             * The address where notifications are delivered for this channel.
             */
            address: string;
            /**
             * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
             */
            expiration: string; // int64
            /**
             * A UUID or similar unique string that identifies this channel.
             */
            id: string;
            /**
             * Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
             */
            kind: string;
            /**
             * Additional parameters controlling delivery channel behavior. Optional.
             */
            params: {
                [name:string]: string;
            };
            /**
             * A Boolean value to indicate whether payload is wanted. Optional.
             */
            payload: boolean;
            /**
             * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
             */
            resourceId: string;
            /**
             * A version-specific identifier for the watched resource.
             */
            resourceUri: string;
            /**
             * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
             */
            token: string;
            /**
             * The type of delivery mechanism used for this channel.
             */
            type: string;
        }
        /**
         * A list of children of a file.
         */
        interface IChildList {
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The actual list of children.
             */
            items: IChildReference[];
            /**
             * This is always drive#childList.
             */
            kind: string;
            /**
             * A link to the next page of children.
             */
            nextLink: string;
            /**
             * The page token for the next page of children.
             */
            nextPageToken: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * A reference to a folder's child.
         */
        interface IChildReference {
            /**
             * A link to the child.
             */
            childLink: string;
            /**
             * The ID of the child.
             */
            id: string;
            /**
             * This is always drive#childReference.
             */
            kind: string;
            /**
             * A link back to this reference.
             */
            selfLink: string;
        }
        /**
         * A comment on a file in Google Drive.
         */
        interface IComment {
            /**
             * A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
             */
            anchor: string;
            /**
             * The user who wrote this comment.
             */
            author: IUser;
            /**
             * The ID of the comment.
             */
            commentId: string;
            /**
             * The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.
             */
            content: string;
            /**
             * The context of the file which is being commented on.
             */
            context: {
                type: string;
                value: string;
            };
            /**
             * The date when this comment was first created.
             */
            createdDate: string; // date-time
            /**
             * Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.
             */
            deleted: boolean;
            /**
             * The file which this comment is addressing.
             */
            fileId: string;
            /**
             * The title of the file which this comment is addressing.
             */
            fileTitle: string;
            /**
             * HTML formatted content for this comment.
             */
            htmlContent: string;
            /**
             * This is always drive#comment.
             */
            kind: string;
            /**
             * The date when this comment or any of its replies were last modified.
             */
            modifiedDate: string; // date-time
            /**
             * Replies to this post.
             */
            replies: ICommentReply[];
            /**
             * A link back to this comment.
             */
            selfLink: string;
            /**
             * The status of this comment. Status can be changed by posting a reply to a comment with the desired status.  
             * - "open" - The comment is still open. 
             * - "resolved" - The comment has been resolved by one of its replies.
             */
            status: string;
        }
        /**
         * A list of comments on a file in Google Drive.
         */
        interface ICommentList {
            /**
             * List of comments.
             */
            items: IComment[];
            /**
             * This is always drive#commentList.
             */
            kind: string;
            /**
             * A link to the next page of comments.
             */
            nextLink: string;
            /**
             * The token to use to request the next page of results.
             */
            nextPageToken: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * A comment on a file in Google Drive.
         */
        interface ICommentReply {
            /**
             * The user who wrote this reply.
             */
            author: IUser;
            /**
             * The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).
             */
            content: string;
            /**
             * The date when this reply was first created.
             */
            createdDate: string; // date-time
            /**
             * Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.
             */
            deleted: boolean;
            /**
             * HTML formatted content for this reply.
             */
            htmlContent: string;
            /**
             * This is always drive#commentReply.
             */
            kind: string;
            /**
             * The date when this reply was last modified.
             */
            modifiedDate: string; // date-time
            /**
             * The ID of the reply.
             */
            replyId: string;
            /**
             * The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are:  
             * - "resolve" - To resolve a comment. 
             * - "reopen" - To reopen (un-resolve) a comment.
             */
            verb: string;
        }
        /**
         * A list of replies to a comment on a file in Google Drive.
         */
        interface ICommentReplyList {
            /**
             * List of reply.
             */
            items: ICommentReply[];
            /**
             * This is always drive#commentReplyList.
             */
            kind: string;
            /**
             * A link to the next page of replies.
             */
            nextLink: string;
            /**
             * The token to use to request the next page of results.
             */
            nextPageToken: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * The metadata for a file.
         */
        interface IFile {
            /**
             * A link for opening the file in a relevant Google editor or viewer.
             */
            alternateLink: string;
            /**
             * Whether this file is in the Application Data folder.
             */
            appDataContents: boolean;
            /**
             * Whether the current user can comment on the file.
             */
            canComment: boolean;
            /**
             * Whether the current user has read access to the Revisions resource of the file.
             */
            canReadRevisions: boolean;
            /**
             * Whether the file can be copied by the current user.
             */
            copyable: boolean;
            /**
             * Create time for this file (formatted RFC 3339 timestamp).
             */
            createdDate: string; // date-time
            /**
             * A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.
             */
            defaultOpenWithLink: string;
            /**
             * A short description of the file.
             */
            description: string;
            downloadUrl: string;
            /**
             * Whether the file can be edited by the current user.
             */
            editable: boolean;
            /**
             * A link for embedding the file.
             */
            embedLink: string;
            /**
             * ETag of the file.
             */
            etag: string;
            /**
             * Whether this file has been explicitly trashed, as opposed to recursively trashed.
             */
            explicitlyTrashed: boolean;
            /**
             * Links for exporting Google Docs to specific formats.
             */
            exportLinks: {
                [name:string]: string;
            };
            /**
             * The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
             */
            fileExtension: string;
            /**
             * The size of the file in bytes. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
             */
            fileSize: string; // int64
            /**
             * Folder color as an RGB hex string if the file is a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.
             */
            folderColorRgb: string;
            /**
             * The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
             */
            fullFileExtension: string;
            /**
             * The ID of the file's head revision. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
             */
            headRevisionId: string;
            /**
             * A link to the file's icon.
             */
            iconLink: string;
            /**
             * The ID of the file.
             */
            id: string;
            /**
             * Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
             */
            imageMediaMetadata: {
                aperture: number; // float
                cameraMake: string;
                cameraModel: string;
                colorSpace: string;
                date: string;
                exposureBias: number; // float
                exposureMode: string;
                exposureTime: number; // float
                flashUsed: boolean;
                focalLength: number; // float
                height: number; // int32
                isoSpeed: number; // int32
                lens: string;
                location: {
                    altitude: number; // double
                    latitude: number; // double
                    longitude: number; // double
                };
                maxApertureValue: number; // float
                meteringMode: string;
                rotation: number; // int32
                sensor: string;
                subjectDistance: number; // int32
                whiteBalance: string;
                width: number; // int32
            };
            /**
             * Indexable text attributes for the file (can only be written)
             */
            indexableText: {
                text: string;
            };
            /**
             * Whether the file was created or opened by the requesting app.
             */
            isAppAuthorized: boolean;
            /**
             * The type of file. This is always drive#file.
             */
            kind: string;
            /**
             * A group of labels for the file.
             */
            labels: {
                hidden: boolean;
                restricted: boolean;
                starred: boolean;
                trashed: boolean;
                viewed: boolean;
            };
            /**
             * The last user to modify this file.
             */
            lastModifyingUser: IUser;
            /**
             * Name of the last user to modify this file.
             */
            lastModifyingUserName: string;
            /**
             * Last time this file was viewed by the user (formatted RFC 3339 timestamp).
             */
            lastViewedByMeDate: string; // date-time
            /**
             * Deprecated.
             */
            markedViewedByMeDate: string; // date-time
            /**
             * An MD5 checksum for the content of this file. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
             */
            md5Checksum: string;
            /**
             * The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.
             */
            mimeType: string;
            /**
             * Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
             */
            modifiedByMeDate: string; // date-time
            /**
             * Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
             */
            modifiedDate: string; // date-time
            /**
             * A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
             */
            openWithLinks: {
                [name:string]: string;
            };
            /**
             * The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Drive.
             */
            originalFilename: string;
            /**
             * Whether the file is owned by the current user.
             */
            ownedByMe: boolean;
            /**
             * Name(s) of the owner(s) of this file.
             */
            ownerNames: string[];
            /**
             * The owner(s) of this file.
             */
            owners: IUser[];
            /**
             * Collection of parent folders which contain this file.
             * Setting this field will put the file in all of the provided folders. On insert, if no folders are provided, the file will be placed in the default root folder.
             */
            parents: IParentReference[];
            /**
             * The list of permissions for users with access to this file.
             */
            permissions: IPermission[];
            /**
             * The list of properties.
             */
            properties: IProperty[];
            /**
             * The number of quota bytes used by this file.
             */
            quotaBytesUsed: string; // int64
            /**
             * A link back to this file.
             */
            selfLink: string;
            /**
             * Whether the file's sharing settings can be modified by the current user.
             */
            shareable: boolean;
            /**
             * Whether the file has been shared.
             */
            shared: boolean;
            /**
             * Time at which this file was shared with the user (formatted RFC 3339 timestamp).
             */
            sharedWithMeDate: string; // date-time
            /**
             * User that shared the item with the current user, if available.
             */
            sharingUser: IUser;
            /**
             * The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'.
             */
            spaces: string[];
            /**
             * Thumbnail for the file. Only accepted on upload and for files that are not already thumbnailed by Google.
             */
            thumbnail: {
                image: string; // byte
                mimeType: string;
            };
            /**
             * A short-lived link to the file's thumbnail. Typically lasts on the order of hours.
             */
            thumbnailLink: string;
            /**
             * The title of this file.
             */
            title: string;
            /**
             * The permissions for the authenticated user on this file.
             */
            userPermission: IPermission;
            /**
             * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
             */
            version: string; // int64
            /**
             * Metadata about video media. This will only be present for video types.
             */
            videoMediaMetadata: {
                durationMillis: string; // int64
                height: number; // int32
                width: number; // int32
            };
            /**
             * A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
             */
            webContentLink: string;
            /**
             * A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.
             */
            webViewLink: string;
            /**
             * Whether writers can share the document with other users.
             */
            writersCanShare: boolean;
        }
        /**
         * A list of files.
         */
        interface IFileList {
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The actual list of files.
             */
            items: IFile[];
            /**
             * This is always drive#fileList.
             */
            kind: string;
            /**
             * A link to the next page of files.
             */
            nextLink: string;
            /**
             * The page token for the next page of files.
             */
            nextPageToken: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * A list of generated IDs which can be provided in insert requests
         */
        interface IGeneratedIds {
            /**
             * The IDs generated for the requesting user in the specified space.
             */
            ids: string[];
            /**
             * This is always drive#generatedIds
             */
            kind: string;
            /**
             * The type of file that can be created with these IDs.
             */
            space: string;
        }
        /**
         * A list of a file's parents.
         */
        interface IParentList {
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The actual list of parents.
             */
            items: IParentReference[];
            /**
             * This is always drive#parentList.
             */
            kind: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * A reference to a file's parent.
         */
        interface IParentReference {
            /**
             * The ID of the parent.
             */
            id: string;
            /**
             * Whether or not the parent is the root folder.
             */
            isRoot: boolean;
            /**
             * This is always drive#parentReference.
             */
            kind: string;
            /**
             * A link to the parent.
             */
            parentLink: string;
            /**
             * A link back to this reference.
             */
            selfLink: string;
        }
        /**
         * A permission for a file.
         */
        interface IPermission {
            /**
             * Additional roles for this user. Only commenter is currently allowed.
             */
            additionalRoles: string[];
            /**
             * The authkey parameter required for this permission.
             */
            authKey: string;
            /**
             * The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain.
             */
            domain: string;
            /**
             * The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group.
             */
            emailAddress: string;
            /**
             * The ETag of the permission.
             */
            etag: string;
            /**
             * The time at which this permission will expire (RFC 3339 date-time).
             */
            expirationDate: string; // date-time
            /**
             * The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type anyone, in which case both id and value are ignored.
             */
            id: string;
            /**
             * This is always drive#permission.
             */
            kind: string;
            /**
             * The name for this permission.
             */
            name: string;
            /**
             * A link to the profile photo, if available.
             */
            photoLink: string;
            /**
             * The primary role for this user. Allowed values are:  
             * - owner 
             * - reader 
             * - writer
             */
            role: string;
            /**
             * A link back to this permission.
             */
            selfLink: string;
            /**
             * The account type. Allowed values are:  
             * - user 
             * - group 
             * - domain 
             * - anyone
             */
            type: string;
            /**
             * The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type anyone, in which case both id and value are ignored.
             */
            value: string;
            /**
             * Whether the link is required for this permission.
             */
            withLink: boolean;
        }
        /**
         * An ID for a user or group as seen in Permission items.
         */
        interface IPermissionId {
            /**
             * The permission ID.
             */
            id: string;
            /**
             * This is always drive#permissionId.
             */
            kind: string;
        }
        /**
         * A list of permissions associated with a file.
         */
        interface IPermissionList {
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The actual list of permissions.
             */
            items: IPermission[];
            /**
             * This is always drive#permissionList.
             */
            kind: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * A key-value pair attached to a file that is either public or private to an application.
         * The following limits apply to file properties:  
         * - Maximum of 100 properties total per file
         * - Maximum of 30 private properties per app
         * - Maximum of 30 public properties
         * - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property.
         */
        interface IProperty {
            /**
             * ETag of the property.
             */
            etag: string;
            /**
             * The key of this property.
             */
            key: string;
            /**
             * This is always drive#property.
             */
            kind: string;
            /**
             * The link back to this property.
             */
            selfLink: string;
            /**
             * The value of this property.
             */
            value: string;
            /**
             * The visibility of this property.
             */
            visibility: string;
        }
        /**
         * A collection of properties, key-value pairs that are either public or private to an application.
         */
        interface IPropertyList {
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The list of properties.
             */
            items: IProperty[];
            /**
             * This is always drive#propertyList.
             */
            kind: string;
            /**
             * The link back to this list.
             */
            selfLink: string;
        }
        /**
         * A revision of a file.
         */
        interface IRevision {
            /**
             * Short term download URL for the file. This will only be populated on files with content stored in Drive.
             */
            downloadUrl: string;
            /**
             * The ETag of the revision.
             */
            etag: string;
            /**
             * Links for exporting Google Docs to specific formats.
             */
            exportLinks: {
                [name:string]: string;
            };
            /**
             * The size of the revision in bytes. This will only be populated on files with content stored in Drive.
             */
            fileSize: string; // int64
            /**
             * The ID of the revision.
             */
            id: string;
            /**
             * This is always drive#revision.
             */
            kind: string;
            /**
             * The last user to modify this revision.
             */
            lastModifyingUser: IUser;
            /**
             * Name of the last user to modify this revision.
             */
            lastModifyingUserName: string;
            /**
             * An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.
             */
            md5Checksum: string;
            /**
             * The MIME type of the revision.
             */
            mimeType: string;
            /**
             * Last time this revision was modified (formatted RFC 3339 timestamp).
             */
            modifiedDate: string; // date-time
            /**
             * The original filename when this revision was created. This will only be populated on files with content stored in Drive.
             */
            originalFilename: string;
            /**
             * Whether this revision is pinned to prevent automatic purging. This will only be populated and can only be modified on files with content stored in Drive which are not Google Docs. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter.
             */
            pinned: boolean;
            /**
             * Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Google Docs.
             */
            publishAuto: boolean;
            /**
             * Whether this revision is published. This is only populated and can only be modified for Google Docs.
             */
            published: boolean;
            /**
             * A link to the published revision.
             */
            publishedLink: string;
            /**
             * Whether this revision is published outside the domain. This is only populated and can only be modified for Google Docs.
             */
            publishedOutsideDomain: boolean;
            /**
             * A link back to this revision.
             */
            selfLink: string;
        }
        /**
         * A list of revisions of a file.
         */
        interface IRevisionList {
            /**
             * The ETag of the list.
             */
            etag: string;
            /**
             * The actual list of revisions.
             */
            items: IRevision[];
            /**
             * This is always drive#revisionList.
             */
            kind: string;
            /**
             * A link back to this list.
             */
            selfLink: string;
        }
        /**
         * Information about a Drive user.
         */
        interface IUser {
            /**
             * A plain text displayable name for this user.
             */
            displayName: string;
            /**
             * The email address of the user.
             */
            emailAddress: string;
            /**
             * Whether this user is the same as the authenticated user for whom the request was made.
             */
            isAuthenticatedUser: boolean;
            /**
             * This is always drive#user.
             */
            kind: string;
            /**
             * The user's ID as visible in the permissions collection.
             */
            permissionId: string;
            /**
             * The user's profile picture.
             */
            picture: {
                url: string;
            };
        }
    }
}
