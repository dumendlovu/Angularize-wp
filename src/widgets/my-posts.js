
export class MyPostsCtrl {
    constructor(RestApi) {
        RestApi.ready().then(() => {
                this.posts = RestApi.$wp_v2.posts({ author: RestApi.$server.currentUser.ID })
                this.posts.get()
            }
        )
    }
}

let MyPosts = {
    controller: MyPostsCtrl,
    template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">My Posts</h3>
        </div>
        <div class="panel-body">
            <div class="list-group">
                <a href="{{ post.attr('link') }}" class="list-group-item" ng-repeat="post in $ctrl.posts">
                    <span class="badge">{{ post.attr('date') | timesince }} ago</span>
                    {{ post.attr('title') }}            
                </a>
            </div>
        </div>
        <div class="panel-footer">
            <nav aria-label="...">
            <ul class="pager">
                <li><a href="#">Previous</a></li>
                <li><a href="#">Next</a></li>
            </ul>
            </nav>
        </div>
    </div>   
    `
}

export default MyPosts;