import React from 'react';
import { Story } from '@storybook/react';

import { Meta } from '@storybook/react';
import Button, { ButtonProps } from "./Button";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: { type: "radio" }
        },
        inverted: {
            options: ["inverted"],
            control: { type: "check" }
        },
        icone: {
            options: ["fa-cog", "fa-search", "fa-eye", "fa-edit", "	fa-trash-alt"],
            control: { type: "radio" }
        }
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'claro', value: '##ffffff' },
                { name: 'escuro', value: '#071d41' },
            ],
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
    variant: "primary",
    children: <>Botão</>,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
    children: "Botão",
};

export const Icone: Story = Template.bind({});
Icone.args = {
    children: "Botão com Ícone",
    "aria-label": "Ícone ilustrativo",
    icone: "fa-cog"
};
