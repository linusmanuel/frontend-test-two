import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Image = styled.img`
  height: 33px;
`

const Logo = () => {
  return (
    <Image src={logo} alt="DevJobs Logo" />
  )
}

export default Logo