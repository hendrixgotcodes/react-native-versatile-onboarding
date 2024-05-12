<p align="center">
  <img src="logo.png" alt="NativeWind Logo" width="150"/>
</p>
<h1 align="center">React Native Versatile Onboarding</h1>

React-native-versatile-onboarding is a highly customizable and easy-to-integrate React Native library designed to enhance the onboarding experience for mobile applications. This library offers a rich set of animations, flexible layouts, and an intuitive API that caters to both developers and designers looking to create compelling, informative, and interactive onboarding flows.

## Installation

```sh
npm install react-native-versatile-onboarding
```

## Usage

```js
import * as React from 'react';
import VersatileOnboarding from 'react-native-versatile-onboarding';
import OnboardingItem from './OnboardingItem';
import data from './data';

export default function App() {
  return (
    <VersatileOnboarding>
      {data.map((item) => (
        <OnboardingItem
          Illustration={item.illustration}
          description={item.description}
          title={item.title}
          key={item.id}
        />
      ))}
    </VersatileOnboarding>
  );
}
```

## Configuration
<div style="overflow: auto;">
    <table border="1">
        <thead>
            <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>activePaginationColor (optional)</td>
                <td>
                  string
                </td>
                <td>rgba(0, 0, 0, 0.159)</td>
                <td>
                   Set this to change the color of active pagination element. This should be a color code if set (Can be HEX, rgb, rgba or hsl value.
                </td>
            </tr>
            <tr>
                <td>Children</td>
                <td>
                    ReactElement&lt;typeof View&gt; | Array&lt;ReactElement&lt;typeof View&gt;&gt;
                </td>
                <td>No default; you must specify at least one &lt;View /&gt; component.</td>
                <td>
                    This property should be a list of &lt;View /&gt; components. It may be updated in the future to support additional component types.
                </td>
            </tr>
            <tr>
                <td>Footer (optional)</td>
                <td>ReactNode</td>
                <td>Built-in footer component</td>
                <td>Provides an optional footer component that can be customized or replaced.</td>
            </tr>
            <tr>
                <td>footerBtnStyle (optional)</td>
                <td>StyleProp&lt;ViewStyle&gt;</td>
                <td>Built-in footer styles</td>
                <td>Allows customization of the default styles applied to the provided footer component.</td>
            </tr>
            <tr>
                <td>inAtivePaginationColor (optional)</td>
                <td>
                  string
                </td>
                <td>rgba(0, 0, 0, 1)</td>
                <td>
                   Set this to change the color of inActive pagination element. This should be a color code if set (Can be HEX, rgb, rgba or hsl value.
                </td>
            </tr>
            <tr>
                <td>onNavigate (optional)</td>
                <td>(currentPageIndex: number) =&gt; any</td>
                <td>undefined</td>
                <td>Callback that is invoked when the onboarding component navigates to a new page.</td>
            </tr>
            <tr>
                <td>onNavigateToEnd (optional)</td>
                <td>( ) =&gt; any</td>
                <td>undefined</td>
                <td>Callback that is invoked when the onboarding component finishes all navigation.</td>
            </tr>
            <tr>
                <td>paginationContainerStyle (optional)</td>
                <td>StyleProp&lt;ViewStyle&gt;</td>
                <td>null</td>
                <td>
                  Allows customization of the default styles applied to the container of pagination elements.
                </td>
            </tr>
            <tr>
                <td>PaginatorType (optional)</td>
                <td>"dot" | "dash"</td>
                <td>"dot"</td>
                <td>Specifies the appearance of the pagination element, either as dots or dashes.</td>
            </tr>
        </tbody>
    </table>
</div>



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with ❤️
