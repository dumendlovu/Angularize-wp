/**
 * Like functionality for posts and other content
 * - Allows user to like and unlike posts
 * - Try as much as possible to prevent duplicate likes
 * Usage: <i class="fa fa-heart" like="213"></i>
 * where 213 is post id.
 */
export class LikeDirectiveCtrl {
    constructor(RestApi) {
        this.restrict = 'A';
        this.transclude = true;
        this.scope = {};
        this.RestApi = RestApi;
        this.likeCount = 0;
        this.template = function( element, attrs ) {
            var tag = element[0].nodeName;
            return "<"+tag+" data-ng-transclude ng-*=''></"+tag+">";
        };
    }

    compile(element, attr) {
        // determine if user has liked this post and set the like class
        element.css('color', 'red');
        element.addClass("like")
        let postId = attr.like;
        /*this.CurrentUser.getMeta('likes').then(
            likes => {
                //if(likes.contain(postId)) 
                    element.addClass('liked')
            }
        )*/
        return this.link
    }

    link(scope, element, attr) {
        element.bind('click', () => {
            if(element.hasClass('liked')) {
                element.removeClass('liked');
                this.unlike(attr.like);
                --this.likeCount;
            }
            else {
                element.addClass('liked');
                this.like(attr.like);
                ++this.likeCount;
            }
        });
    }

    like(postId) {
        console.log("liked ", postId);
    }

    unlike(postId) {
        console.log("unliked ", postId);
    }
}

let LikeDirective = function(RestApi) {
    'ngInject';
    return new LikeDirectiveCtrl(RestApi);
}

export default LikeDirective;