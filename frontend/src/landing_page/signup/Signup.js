// import React from 'react';

// function Signup() {
//     return ( 
//         <h1>Sign Up</h1>
//      );
// }

// export default Signup;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f8fc;
  padding: 1rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid #e6e8eb;
`;

const Logo = styled.img`
  width: 120px;
`;

const TabBar = styled.div`
  display: flex;
  margin: 1rem;
  background: #f1f3f6;
  border-radius: 4px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: ${props => (props.active ? '#ffffff' : 'transparent')};
  color: ${props => (props.active ? '#000000' : '#7a8590')};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${props => (props.active ? '#ffffff' : '#e6e8eb')};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  font-size: 0.9rem;
  &:focus {
    outline: none;
    border-color: #008cff;
    box-shadow: 0 0 0 2px rgba(0,140,255,0.2);
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #008cff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0075d7;
  }

  &:disabled {
    background: #a5cfff;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  color: #e63946;
  font-size: 0.8rem;
  margin-top: -0.5rem;
  margin-bottom: 0.75rem;
`;

const Footer = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #7a8590;
  margin-top: 0.5rem;
`;

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    validate();
  }, [formData, isLogin]);

  const toggleMode = (mode) => {
    setIsLogin(mode === 'login');
    setFormData({ email: '', password: '', confirmPassword: '', username: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    // Email
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = 'Invalid email';

    // Password
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Must be at least 6 characters';

    if (!isLogin) {
      // Username
      if (!formData.username) newErrors.username = 'Username is required';
      // Confirm password
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm your password';
      else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    if (isLogin) {
      console.log('Logging in with', formData);
    } else {
      console.log('Signing up with', formData);
    }
    // Reset
    setFormData({ email: '', password: '', confirmPassword: '', username: '' });
    // Redirect to HomePage after login/signup
    navigate('/');
  };

  return (
    <Container>
      <Card>
        <Header>
          <Logo src="media/logo.svg" alt="Zerodha Logo" />
        </Header>
        <TabBar>
          <Tab active={isLogin} onClick={() => toggleMode('login')}>Login</Tab>
          <Tab active={!isLogin} onClick={() => toggleMode('signup')}>Sign up</Tab>
        </TabBar>
        <Form onSubmit={handleSubmit} noValidate>
          {!isLogin && (
            <>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <ErrorText>{errors.username}</ErrorText>}
            </>
          )}
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
          {!isLogin && (
            <>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
            </>
          )}
        <Button type="submit" disabled={!isValid}>
            {isLogin ? 'Login' : 'Sign up'}
          </Button>
        </Form>
        <Footer>
          {isLogin ? (
            <p>New to Zerodha? <span style={{ color: '#008cff', cursor: 'pointer' }} onClick={() => toggleMode('signup')}>Sign up</span></p>
          ) : (
            <p>Already have an account? <span style={{ color: '#008cff', cursor: 'pointer' }} onClick={() => toggleMode('login')}>Login</span></p>
          )}
        </Footer>
      </Card>
    </Container>
  );
};

export default SignUp;
