import React from 'react';
import { screen, render } from '@testing-library/react';
import File from '../Pages/App Pages/File';

describe('FilePage', () => {

    it('must display a title', () => {
        render(<File/>);
        expect(screen.queryByText(/Archivo/i)).toBeInTheDocument();
    })

});