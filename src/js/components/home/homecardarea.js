import React from 'react';
import HomeCard from './homecard';
import '../../../css/home/homecard.css';

export default class HomeCardArea extends React.Component {
  constructor() {
    super();
    this.state = {
      articleCard: null,
      demoCard: null,
      aboutCard: null,
    };
  }

  componentDidMount() {
    const url = 'https://api.github.com/repos/axuebin/react-blog/issues?creator=axuebin&labels=blog';
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const articleList = [];
        for (let i = 0; i < 6; i += 1) {
          const articleTemp = {};
          articleTemp.title = data[i].title;
          articleTemp.id = data[i].number;
          articleTemp.url = `/blog/article/${data[i].number}`;
          articleList.push(articleTemp);
        }

        const demoList = [{
          id: 1,
          title: 'React实现的TodoList',
          url: 'http://axuebin.com/react-todolist',
        }, {
          id: 2,
          title: 'React实现的列车站点查询',
          url: 'http://axuebin.com/train-query',
        }, {
          id: 3,
          title: 'React实现的flex布局在线可视化',
          url: 'http://axuebin.com/flex-study',
        }];

        const aboutList = [{
          id: 1,
          title: '2018届应届生',
          url: '/about',
        }, {
          id: 2,
          title: '求工作求工作求工作...',
          url: '/about',
        }];

        const articleCard = <HomeCard key={1} cardId={1} cardUrl="/blog" cardName="Blog" cardContent={articleList} />;
        const demoCard = <HomeCard key={2} cardId={2} cardUrl="/demo" cardName="Demo" cardContent={demoList} />;
        const aboutCard = <HomeCard key={3} cardId={3} cardUrl="/about" cardName="About Me" cardContent={aboutList} />;
        this.setState({ articleCard, demoCard, aboutCard });
      }).catch(e => console.log(e));
  }

  render() {
    return (
      <div className="home-card-area">
        {this.state.articleCard}
        {this.state.demoCard}
        {this.state.aboutCard}
      </div>
    );
  }
}
