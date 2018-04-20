import { Component, OnInit } from '@angular/core';

import * as Hammer from 'hammerjs';
import { Manager, Swipe } from 'hammerjs';

@Component({
  selector: 'app-hammer',
  templateUrl: './hammer.component.html',
  styleUrls: ['./hammer.component.sass']
})
export class HammerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.bindSwipe();
    this.bindPan();

    // more examples:
    // http://hammerjs.github.io/examples/

    this.bindEventsTypes();
    this.bindEventsSequence();
  }

  bindPan() {
    const myElement = document.getElementById('myElement');

    // create a simple instance
    // by default, it only adds horizontal recognizers
    const mc = new Hammer(myElement);

    // listen to events...
    mc.on('panleft panright tap press', function (ev) {
      myElement.textContent = ev.type + ' gesture detected.';
    });
  }

  bindSwipe() {
    const swipeElement = document.querySelector('.test-swipe');
    const manager = new Manager(swipeElement);
    const swipe = new Hammer.Swipe();

    manager.add(swipe);
    manager.on('swipeup', (e) => {
      swipeElement.textContent = e.type + ' gesture detected.';
      console.log('swipeup', e);
    });
    manager.on('swiperight', (e) => {
      swipeElement.textContent = e.type + ' gesture detected.';
      console.log('swiperight', e);
    });
    manager.on('swipedown', (e) => {
      swipeElement.textContent = e.type + ' gesture detected.';
      console.log('swipedown', e);
    });
    manager.on('swipeleft', (e) => {
      swipeElement.textContent = e.type + ' gesture detected.';
      console.log('swipeleft', e);
    });
    manager.on('swipe', (e) => {
      // swipeElement.textContent = e.type + ' gesture detected.';
      console.log('on swipe, emitted latest', e);
    });
  }

  bindEventsTypes() {
    // 创建一个新的hammer对象并且在初始化时指定要处理的dom元素
    const hammerPan = new Hammer(document.querySelector('.types .pan'));
    // 添加事件：Pan
    hammerPan.on('pan', function (e) {
      document.querySelector('.result1').innerHTML = 'X偏移量：【' + e.deltaX + '】，Y偏移量：【' + e.deltaY + '】<br />';
      // 控制台输出
      console.log(e);
    });

    // 创建一个新的hammer对象并且在初始化时指定要处理的dom元素
    const hammerPinch = new Hammer(document.querySelector('.types .pinch'));
    // 为该dom元素指定触屏移动事件
    hammerPinch.add(new Hammer.Pinch());
    // 添加事件：pinch
    hammerPinch.on('pinch', function (e) {
      document.querySelector('.result2').innerHTML = '捏合初触发<br />';
      // 控制台输出
      console.log(e);
    });

    // 创建一个新的hammer对象并且在初始化时指定要处理的dom元素
    const hammerPress = new Hammer(document.querySelector('.types .press'));
    // 添加事件 press : 也就是长按 >500ms
    hammerPress.on('press', function (e) {
      document.querySelector('.result3').innerHTML = '超过500ms了<br />';
      // 控制台输出
      console.log(e);
    });

    // 创建一个新的hammer对象并且在初始化时指定要处理的dom元素
    const hammerRotate = new Hammer(document.querySelector('.types .rotate'));
    // 为该dom元素指定触屏移动事件
    hammerRotate.add(new Hammer.Rotate());
    // 添加事件 rotate
    hammerRotate.on('rotate', function (e) {
      document.querySelector('.result4').innerHTML = 'X偏移量：【' + e.deltaX + '】，Y偏移量：【' + e.deltaY + '】<br />';
      // 控制台输出
      console.log(e);
    });

    // 创建一个新的hammer对象并且在初始化时指定要处理的dom元素
    const hammerSwipe = new Hammer(document.querySelector('.types .swipe'));
    // 添加事件
    hammerSwipe.on('swipeleft swiperight', function (e) {
      document.querySelector('.result5').innerHTML = e.type + 'X偏移量：【' + e.deltaX + '】，Y偏移量：【' + e.deltaY + '】<br />';
      // 控制台输出
      console.log(e);
    });

    // 创建一个新的hammer对象并且在初始化时指定要处理的dom元素
    const hammerTap = new Hammer(document.querySelector('.types .tap'));
    // 添加事件
    hammerTap.on('tap', function (e) {
      document.querySelector('.result6').innerHTML = '点击触发了，长按无效<br />';
      // 控制台输出
      console.log(e);
    });
  }

  bindEventsSequence() {
    const sequenceElement = document.querySelector('.sequence');
    const hammer = new Hammer(sequenceElement);
    // 添加事件
    hammer.on('tap', function (e) {
      sequenceElement.textContent = '点击触发了，长按无效';
      // 控制台输出
      console.log('tap');
    });

    const manager = new Manager(sequenceElement);
    const swipe = new Hammer.Swipe();
    manager.add(swipe);

    manager.on('swiperight', (e) => {
      sequenceElement.textContent = e.type + ' gesture detected.';
      console.log('swiperight');
    });

    sequenceElement.addEventListener('touchstart', () => {
      console.log('touch start');
    });
  }

}
