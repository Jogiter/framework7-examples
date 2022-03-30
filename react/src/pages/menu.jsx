import React, { useRef } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  Menu,
  MenuItem,
  MenuDropdown,
  MenuDropdownItem,
  Card,
  CardContent,
  Icon,
} from 'framework7-react';

export default () => {
  const mapEl = useRef(null);
  const mapInitialized = useRef(false);
  const mapStyleLoaded = useRef(false);
  const mapScriptLoaded = useRef(false);

  const initMap = () => {
    const mymap = window.L.map(mapEl.current, { zoomControl: false }).setView([51.505, -0.09], 10);
    window.L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibm9saW1pdHM0d2ViIiwiYSI6ImNqcXA4NTdmczBocm8zeG13Zm1zNTdyeDAifQ.HoJgmqQ_uH4zLyNJmiY98A',
      {
        maxZoom: 18,
        attribution: `Map data &copy; <a class="external" target="_blank" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
        <a class="external" target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
        Imagery © <a class="external" target="_blank" href="https://www.mapbox.com/">Mapbox</a>`,
        id: 'mapbox.streets',
      },
    ).addTo(mymap);
    mapInitialized.current = true;
  };

  const loadMapAssets = () => {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.css';
    style.integrity =
      'sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==';
    style.setAttribute('crossorigin', '');
    style.onload = () => {
      mapStyleLoaded.current = true;
      if (mapScriptLoaded.current) initMap();
    };
    document.head.appendChild(style);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
    script.integrity =
      'sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==';
    script.setAttribute('crossorigin', '');
    script.onload = () => {
      mapScriptLoaded.current = true;
      if (mapStyleLoaded.current) initMap();
    };
    document.head.appendChild(script);
  };

  const onPageAfterIn = () => {
    if (mapInitialized.current) return;
    if (!window.L) {
      loadMapAssets();
      return;
    }
    initMap();
  };

  return (
    <Page onPageAfterIn={() => onPageAfterIn()}>
      <Navbar title="Menu" backLink="Back" />
      <Block strong>
        <p>
          Menu component is designed to be used as overlay control. It can be very helpful when you
          need controls on top of the map, images, some text/code editor, etc.
        </p>
      </Block>
      <BlockTitle>Links</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Menu>
          <MenuItem href="#" text="Item 1" />
          <MenuItem href="#" text="Item 2" />
          <MenuItem href="#" iconF7="pencil" />
          <MenuItem href="#" iconF7="square_arrow_up" />
        </Menu>
      </Block>

      <BlockTitle>Dropdowns</BlockTitle>
      <Block strong className="no-padding-horizontal" style={{ zIndex: 2000 }}>
        <p className="padding-horizontal">
          Dropdown can be position on left, center or right of the menu item. It also can be
          scrollable.
        </p>
        <Menu>
          <MenuItem text="Left" dropdown>
            <MenuDropdown left>
              <MenuDropdownItem href="#" text="Menu Item 1" />
              <MenuDropdownItem href="#" text="Menu Item 2" />
              <MenuDropdownItem href="#" text="Menu Item 3" />
              <MenuDropdownItem href="#" text="Menu Item 4" />
              <MenuDropdownItem divider />
              <MenuDropdownItem href="#" text="Menu Item 5" />
              <MenuDropdownItem href="#" text="Menu Item 6" />
            </MenuDropdown>
          </MenuItem>

          <MenuItem text="Center" dropdown>
            <MenuDropdown center contentHeight="200px">
              <MenuDropdownItem href="#" text="Menu Item 1" />
              <MenuDropdownItem href="#" text="Menu Item 2" />
              <MenuDropdownItem href="#" text="Menu Item 3" />
              <MenuDropdownItem href="#" text="Menu Item 4" />
              <MenuDropdownItem divider />
              <MenuDropdownItem href="#" text="Menu Item 5" />
              <MenuDropdownItem href="#" text="Menu Item 6" />
              <MenuDropdownItem href="#" text="Menu Item 7" />
              <MenuDropdownItem divider />
              <MenuDropdownItem href="#" text="Menu Item 8" />
              <MenuDropdownItem href="#" text="Menu Item 9" />
              <MenuDropdownItem href="#" text="Menu Item 10" />
            </MenuDropdown>
          </MenuItem>

          <MenuItem text="Right" dropdown>
            <MenuDropdown right>
              <MenuDropdownItem href="#" text="Menu Item 1" />
              <MenuDropdownItem href="#" text="Menu Item 2" />
              <MenuDropdownItem href="#" text="Menu Item 3" />
              <MenuDropdownItem href="#" text="Menu Item 4" />
              <MenuDropdownItem divider />
              <MenuDropdownItem href="#" text="Menu Item 5" />
              <MenuDropdownItem href="#" text="Menu Item 6" />
            </MenuDropdown>
          </MenuItem>

          <MenuItem style={{ marginLeft: 'auto' }} iconF7="square_arrow_up" dropdown>
            <MenuDropdown right>
              <MenuDropdownItem href="#">
                <span>Share on Facebook</span>
                <Icon className="margin-left" f7="logo_facebook" />
              </MenuDropdownItem>
              <MenuDropdownItem href="#">
                <span>Share on Twitter</span>
                <Icon className="margin-left" f7="logo_twitter" />
              </MenuDropdownItem>
            </MenuDropdown>
          </MenuItem>

          <MenuItem href="#" iconF7="pencil" />
        </Menu>
      </Block>

      <BlockTitle>On Top Of Map</BlockTitle>
      <Card>
        <CardContent padding={false}>
          <div ref={mapEl} style={{ height: '240px' }}></div>
          <Menu style={{ position: 'absolute', left: '0px', top: '6px' }}>
            <MenuItem href="#" iconF7="zoom_in"></MenuItem>
            <MenuItem href="#" iconF7="zoom_out"></MenuItem>
            <MenuItem iconF7="layers_fill" dropdown>
              <MenuDropdown left>
                <MenuDropdownItem href="#" text="Terrain" />
                <MenuDropdownItem href="#" text="Satellite" />
              </MenuDropdown>
            </MenuItem>
          </Menu>
        </CardContent>
      </Card>
    </Page>
  );
};
