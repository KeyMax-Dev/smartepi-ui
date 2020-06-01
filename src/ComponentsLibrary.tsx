import { Icon, Button, getGlobalTheme, ImageAvatar, Input } from './lib';
import DefaultTheme from './lib/assets/themes/default-theme';
import Icons from './lib/assets/svgs/icons';
import React, { useState, ReactText } from 'react';
import styled from 'styled-components';
import useModal from './lib/services/aside-components/modal/index';
import useOverflow from './lib/services/aside-components/overflow/index';
import useToast from './lib/services/aside-components/toast/index';

interface ComponentExpandableProps {
    children: ReactText | JSX.Element | JSX.Element[];
    componentName: string;
}

const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h1 {
        text-align: center;
        font-size: ${() => getGlobalTheme().font.h1.fontSize};
        font-weight: ${() => getGlobalTheme().font.h1.fontWeight};
    }
`;

const ComponentExpandableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 5px;
    padding: 5px;
`;

const ComponentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 5px;
    border: 1px solid #00000010;
    width: 1024px;
    @media screen and (max-width: 1024px) {   
        width: calc(100% - 20px)
    }
    flex-wrap: wrap;
    border-radius: ${DefaultTheme.borderRadius};
    
    .__icon-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px 15px;
        font-size: 10px;
    }
`;

export default function ComponentsLibrary(): JSX.Element {

    const [showComponent, _setShowComponent] = useState<{ [componentName: string]: boolean }>({});
    const setShowComponent = (componentName: string) => {
        const aux = { [componentName]: !!!showComponent[componentName] };
        _setShowComponent({ ...showComponent, ...aux });
    };
    const modal = useModal(<div>Modal Service</div>);
    const toast = useToast(<span>Toast Service</span>);
    const overflow = useOverflow(<div>Overflow Service</div>);

    const ComponentExpandable = (props: ComponentExpandableProps): JSX.Element => {
        return (
            <ComponentExpandableContainer>
                {showComponent[props.componentName] &&
                    <Button styleType="outline" onClick={() => setShowComponent(props.componentName)} text={`Hide ${props.componentName}`} />
                }
                {!showComponent[props.componentName] &&
                    <Button styleType="solid" onClick={() => setShowComponent(props.componentName)} text={`Show ${props.componentName}`} />
                }
                {showComponent[props.componentName] &&
                    <ComponentsContainer>
                        {props.children}
                    </ComponentsContainer>
                }
            </ComponentExpandableContainer>
        );
    };

    return (
        <PageBody>
            <h1>SmartEPI UI - Components Library</h1>
            <ComponentExpandable componentName="Icons">
                {Object.keys(Icons).map(icon => (
                    <div key={icon} className="__icon-container">
                        <Icon name={icon} />
                        <span>{icon}</span>
                    </div>
                ))}
            </ComponentExpandable>
            <ComponentExpandable componentName="Buttons">
                <Button styleType="solid" text="Solid" />
                <Button styleType="solid" text="Solid with Icon" icon="account" />
                <Button styleType="solid" text="Solid with Icon with iconSize" icon="account" iconSize="80px" />
                <Button styleType="outline" text="Outline with Icon" icon="account" />
                <Button styleType="outline" text="outline" />
                <Button styleType="icon" icon="cog" onMouseEnter={(event) => overflow.open(event.target as HTMLElement, true)} />
                <Button styleType="icon" icon="cog" text="Configurations" />
                <Button styleType="icon" icon="cog" text="Configurations With iconSize" iconSize="20px" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Services">
                <Button text="Modal" onClick={() => modal.open()} />
                <Button text="Toast" onClick={() => toast.open()} />
                <Button text="Overflow" onClick={(event) => overflow.open(event.target as HTMLElement)} />
            </ComponentExpandable>
            <ComponentExpandable componentName="Image">
                <ImageAvatar />
                <ImageAvatar src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/91163646_644726092755428_8399382294829203456_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=v-UM5fHBt7cAX_24GWk&oh=220aed5de09e8c111dc2e47cd4ad07fe&oe=5EFB8806" />
                <ImageAvatar size="100px" src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/91163646_644726092755428_8399382294829203456_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=v-UM5fHBt7cAX_24GWk&oh=220aed5de09e8c111dc2e47cd4ad07fe&oe=5EFB8806" />
                <ImageAvatar size="200px" src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/91163646_644726092755428_8399382294829203456_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=v-UM5fHBt7cAX_24GWk&oh=220aed5de09e8c111dc2e47cd4ad07fe&oe=5EFB8806" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Inputs">
                <Input />
                <Input iconRight="account" />
                <Input enableClear />
                <Input enableClear iconLeft="account"/>
                <Input enableClear iconLeft="account" iconRight="account" />
                <Input containerType="outline" />
                <Input containerType="outline" enableClear />
                <Input containerType="outline" enableClear iconRight="account" iconLeft="account"/>
            </ComponentExpandable>
        </PageBody>
    );
}
