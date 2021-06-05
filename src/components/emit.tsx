import styled from 'styled-components'

const Emit = styled.div`
  height: 46px;
  margin: 0 auto;
`

const Input = styled.input`
  width: 240px;
  height: 46px;
  line-height: 46px;
  border-radius: 23px;
  color: #ff3465;
  outline: none;
  background: none;
  border: 1px solid #ffeaef;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

const Button = styled.div`
  display: inline-block;
  width: 120px;
  height: 46px;
  line-height: 46px;
  border-radius: 23px;
  border: 1px solid #ff3465;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-left: 20px;
  color: #fff;
  background-color: #ff3465;
  cursor: pointer;
`

export default () => {
  return (
    <Emit>
      <Input type="text" placeholder="输入邮箱，订阅优质空投信息" />
      <Button>立即订阅</Button>
    </Emit>
  );
}