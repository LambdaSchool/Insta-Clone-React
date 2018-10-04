import styled from 'styled-components';



export default Wrapper = styled.div`
.search-bar-container {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 0px;
  max-width: 100%;
  width: 100%;
}

.flex-start {
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-grow: 1;
}

.logo-container {
  border-right: 1px solid black;
  padding-right: 5%;
}

.logo-container img {
  width: 50px;
}

.title {
  font-size: 3rem;
  padding-left: 5%;
}

.middle {
  margin: 0 auto;
  width: 100%;
  flex-grow: 2;
}

.input {
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 3px;
  font-size: 1.6rem;
  color: rgba(0,0,0,0.2);
  text-align: center;
  background: #f9f9f9;
  flex-grow: 2;
}

.search-icon {
  font-size: 1.6rem;
  margin: 0 5px;
  color: rgba(0,0,0,0.5);
}

.right-icons {
  font-size: 1.6rem;
  flex-grow: 1;
}

.icon {
  margin: 0 0 0 20px;
}`