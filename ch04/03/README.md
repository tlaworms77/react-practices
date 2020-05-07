## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / [ch04](https://github.com/kickscar-javascript/react-practices/tree/master/ch04) / 03. Prop Validation

<pre>

Prop Validation

-- project-ex01

[Built-in propType Validator : Primitive]
PropTyeps.string
PropTyeps.number
PropTyeps.bool
PropTyeps.object
PropTyeps.array
PropTyeps.func

[Built-in propType Validator : Combined Primitives]
PropTyeps.oneOfType([PropType.string, PropType.number])
PropTyeps.arrayOf(PropType.number)
PropTyeps.objectOf(PropType.number) -> 특정 속성값을 가진 객체
PropTypes.shape({
    name: PropTyeps.string.isRequired,
    price: PropTyeps.number.isRequired
    countOfStock: PropTyeps.number.isRequired,
    isDiscount: PropTyeps.bool.isRequired
})

[Built-in propType Validator : Special]
PropTyeps.node
PropTyeps.element
PropTyeps.instanceOf
PropTyeps.oneOf

isRequired 와 default 값 예제 제시

-- project-ex02
kanban-app   [속성 형식 정의 적용해보기]

-- kanban-app
Custom PropType Validators
실습: 카드 타이틀을 80자로 제한하는 커스텀 발리데이터 만들기

</pre>