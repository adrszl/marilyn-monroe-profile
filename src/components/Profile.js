import React from 'react';
import mapMarkerIcon from '../img/map-marker-alt-solid.svg';
import './Profile.scss';

function LandingView() {
    return(
        <div className="profile-container">
            <h2>Marilyn Monroe</h2>
            <div className="localization-info-container">
                <img src={mapMarkerIcon} title="User's localization" alt="map marker" />
                <address title="User's localization"><span className="localization-address">Poznan, PL</span></address>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis volutpat mi. Maecenas sollicitudin imperdiet est, a semper dui molestie eu. Mauris et neque a erat egestas convallis. Praesent quis dui lacus. Maecenas a tristique felis. Integer fermentum ultricies tortor, in pharetra lectus imperdiet nec. Aliquam erat volutpat. Nam non tellus id neque commodo condimentum. Aenean a magna sit amet urna convallis rutrum at fringilla orci. Suspendisse sit amet ex ante. Nulla et accumsan velit. Nulla id tempus quam. Ut tempor quis felis sed condimentum.</p>
                <blockquote className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis volutpat mi. Maecenas sollicitudin imperdiet est, a semper dui molestie eu.</blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis volutpat mi. Maecenas sollicitudin imperdiet est, a semper dui molestie eu. Mauris et neque a erat egestas convallis. Praesent quis dui lacus. Maecenas a tristique felis. Integer fermentum ultricies tortor, in pharetra lectus imperdiet nec. Aliquam erat volutpat. Nam non tellus id neque commodo condimentum. Aenean a magna sit amet urna convallis rutrum at fringilla orci. Suspendisse sit amet ex ante. Nulla et accumsan velit. Nulla id tempus quam. Ut tempor quis felis sed condimentum.</p>
                <p>Vivamus ornare, mauris et molestie condimentum, metus odio aliquet sem, sit amet aliquam odio lorem ac ex. Morbi massa metus, varius vitae dapibus et, semper maximus orci. Donec in egestas lacus, at interdum orci. Sed dapibus finibus erat, sed venenatis mauris dictum at. Etiam diam est, facilisis eu metus non, tincidunt viverra ipsum. Nullam odio odio, rutrum eu tellus vel, sodales venenatis enim. Ut feugiat massa lacus, in efficitur nisl imperdiet non. Etiam rhoncus velit ut neque commodo, quis imperdiet urna sollicitudin. Sed rutrum lacinia felis ut accumsan. Sed et leo pellentesque, sagittis urna sit amet, ultrices lacus.</p>
            </div>
        </div>
    );
}

export default LandingView;