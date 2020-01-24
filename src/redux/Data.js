import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

const state = {
  _state: {
    navbar: [
      {path: '/profile', title: 'Profile'},
      {path: '/news', title: 'News'},
      {path: '/messages', title: 'Messages'},
      {path: '/friends', title: 'Friends'},
      {path: '/music', title: 'Music'},
      {path: '/video', title: 'Video'}
    ],

    profile: {
      posts: [
        {id: 1, src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', fullName: 'Asylzhan Seytbek', text: 'My First Post', likesCount: 145},
        {id: 2, src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', fullName: 'Asylzhan Seytbek', text: 'My SECOND Post', likesCount: 99923432},
        {id: 3, src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', fullName: 'Asylzhan Seytbek', text: 'My THIRD Post', likesCount: 32423},
        {id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhVQ46ZxIZ5aZUanx5Cw2Pm69m9kiNyp7vUwGqIREjOcxG8-tpg&s', fullName: 'Some Perosn', text: 'Post for you', likesCount: 2412},
      ],
      newChangePost: '',
    },

    messages: {
      users: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Jake'},
      ],
      dialogs: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'HI'},
        {id: 4, message: 'Hello World!'},
      ],
      newDialogs: '',
    },

    friends: [
      {link: '/alex', firstName: 'Alex', lastName: 'Smit', img: 'data:image/png;base64,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'},
      {link: '/sasha', firstName: 'Sasha', lastName: 'Johnson', img: 'data:image/jpeg;base64,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'},
      {link: '/jake', firstName: 'Jake', lastName: 'Zeyn', img: 'data:image/jpeg;base64,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'},
    ]
  },

  _rerenderEntireTree() {
    console.log('State was changed!')
  },

  getState(){
    return this._state;
  },

  subscribe(observer){
    this._rerenderEntireTree = observer;
  },

  dispatch(action){
    profileReducer(this._state.profile, action);
    messagesReducer(this._state.messages, action);

    this._rerenderEntireTree(this._state);
  }
}


window.state = state;

export default state;
