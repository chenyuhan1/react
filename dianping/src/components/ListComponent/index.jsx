import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

export default class ListComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="list-container">
        {
          this.props.data.map((item, index) => {
            return (
              <div className="list-item clear-fix" key={index}>
                <div className="item-img-container float-left">
                  <img src={item.img} alt={item.title}/>
                </div>

                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="float-left">{item.title}</h3>
                        <span className="float-right">{item.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {item.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{item.price}</span>
                        <span className="mumber float-right">已售{item.mumber}</span>
                    </div>
                </div>

              </div>
            )
          })
        }
      </div>
    )
  }
}
