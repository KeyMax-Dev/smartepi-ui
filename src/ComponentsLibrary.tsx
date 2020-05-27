import { Icon, Button, getGlobalTheme } from './lib';
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
    const overflowButtonRef = React.createRef<HTMLDivElement>();
    const overflow = useOverflow(overflowButtonRef, <div>Overflow Service</div>);

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
                        <Icon name={icon} width="40px" height="40px" />
                        <span>{icon}</span>
                    </div>
                ))}
            </ComponentExpandable>
            <ComponentExpandable componentName="Buttons">
                <Button styleType="solid" text="Solid" />
                <Button styleType="solid" text="Solid with Icon" icon="account" />
                <Button styleType="outline" text="Outline with Icon" icon="account" />
                <Button styleType="outline" text="outline" />
                <Button styleType="icon" icon="cog" />
            </ComponentExpandable>
            <ComponentExpandable componentName="Services">
                <Button text="Modal" onClick={() => modal.open()} />
                <Button text="Toast" onClick={() => toast.open()} />
                <div ref={overflowButtonRef}>
                    <Button text="Overflow" onClick={() => overflow.open()} />
                </div>
            </ComponentExpandable>
        </PageBody>
    );
}
