## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / [ch04](https://github.com/kickscar-javascript/react-practices/tree/master/ch04) / 03. 속성의 유효성 검사

<pre>

속성의 유효성 검사

-- project-ex01 [속성 유효성 검사 기본]

속성 유효성 검사기(기본형)
PropTyeps.string
PropTyeps.number
PropTyeps.bool
PropTyeps.object
PropTyeps.array
PropTyeps.func

속성 유효성 검사기(조합형)
PropTyeps.oneOfType([PropType.string, PropType.number])
PropTyeps.arrayOf(PropType.number)
PropTyeps.objectOf(PropType.number) -> 특정 속성값을 가진 객체
PropTypes.shape({
    name: PropTyeps.string.isRequired,
    price: PropTyeps.number.isRequired
    countOfStock: PropTyeps.number.isRequired,
    isDiscount: PropTyeps.bool.isRequired
})

속성 유효성 검사기(기타)
PropTyeps.node
PropTyeps.element
PropTyeps.instanceOf
PropTyeps.oneOf

isRequired 와 default 값 예제 제시

-- kanban-app   [속성 형식 정의 적용해보기]
-- kanban-app   [커스텀 속성 검사기 만들어 보기]
카드 타이틀을 80자로 제한하고 싶은경우...


</pre>