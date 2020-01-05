import React from 'react';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import request from '../../../utils/request';
import { WrappedFormUtils } from 'antd/es/form/Form';
const { Item: FormItem } = Form;

export interface RegisterProps extends FormComponentProps {}

const onRegist = (form: WrappedFormUtils) => {
  form.validateFieldsAndScroll((error, values) => {
    if (!error) {
      request('/api/user/regist', {
        data: values,
        method: 'POST',
      });
    }
  });
};

export default Form.create<RegisterProps>()(function Register(props: RegisterProps) {
  const { form } = props;
  const { getFieldDecorator } = form;
  return (
    <Form>
      <FormItem>{getFieldDecorator('userName')(<Input />)}</FormItem>
      <FormItem>{getFieldDecorator('pwd')(<Input />)}</FormItem>
      <FormItem>
        <Button type="primary" onClick={() => onRegist(form)}>
          提交
        </Button>
      </FormItem>
    </Form>
  );
});
