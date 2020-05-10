## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / [ch04](https://github.com/kickscar-javascript/react-practices/tree/master/ch04) / 05. Component Lifecycle &amp; Data Fetching

<pre>
1. Lifecircle
   1) methods invoked when Mounting
    [consructor] -> [componentWillMount] (x) -> [render] -> [componentDidMount]

   2) method invoked when Unmounting
    [componentWillUnmount]

   3) methods invoked when Props Changes
    [componentWillReceiveProps] -> [shoudComponentUpdate] (x) -> [componentWillUpdate] (x) -> [render] -> [componentDidUpdate(prevProps, prevState, snapshot)]
                                   [getSnapshotBeforeUpdate(prevProps, prevState)] : override

   4) methods invoked when State Change
                                   [shoudComponentUpdate] (x) -> [componentWillUpdate] (x) -> [render] -> [componentDidUpdate(prevProps, prevState, snapshot)]
                                   [getSnapshotBeforeUpdate(prevProps, prevState)] : override


2. 주의할 점
(x) -> has been removed! so that Don't Use
Alternatives:
    componentWillMount -> consructor
    shoudComponentUpdate / componentWillUpdate -> Override getSnapshotBeforeUpdate(...)

3. 외부 API로 데이터 가져오기
   1) Emaillist에 적용해보기
   2) Kanban App에 적용해보기

   
</pre>