
class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        console.log(posts);

        // constructing output posts 
        let output = ''; 

        posts.forEach(post => {
            output += `     
                <div class="card mb-4"> 
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <!-- HTML-5 custom attributes: data-id will be a marking of our post's id  -->
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-edit"></i>
                        </a>
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-trash-alt"></i>
                        </a>
                    </div>
                </div>
            `
        })
        // outputting to the #posts div 
        this.post.innerHTML = output;
    }


}

export const ui = new UI();