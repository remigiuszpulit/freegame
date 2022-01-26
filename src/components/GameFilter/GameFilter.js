import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {GENRES, PLATFORMS, SORT_BY, TAGS} from "./constants";

function GameFilter({setFilter}) {
    const [platform, setPlatform] = useState(PLATFORMS[0].value)
    const [genres, setGenres] = useState(GENRES[0].value)
    const [tags, setTags] = useState(TAGS[0].value)
    const [sortBy, setSortBy] = useState(SORT_BY[0].value)

    const handlePlatform = (e) => {
        setPlatform(e.target.value)
        setFilter(previous => ({...previous, [e.target.name] : e.target.value}))

    }
    const handleGenre = (e) => {
        
        
        setGenres(e.target.value)
        setFilter(previous => ({...previous, [e.target.name] : e.target.value}))

    }
    const handleTags = (e) => {
        
        setTags(e.target.value)
        setFilter(previous => ({...previous, [e.target.name] : e.target.value}))

    }
    const handleSortBy = (e) => {
        setSortBy(e.target.value)
        setFilter(previous => ({...previous, [e.target.name] : e.target.value}))

    }


    return (
        <Box sx={{minWidth: 120, marginTop: 5}}>
            
            <FormControl>
                <InputLabel id="platform">Platform:</InputLabel>
                <Select
                    labelId="platform"
                    id="demo-simple-select"
                    name='platform'
                    value={platform}
                    label="Platform"
                    onChange={handlePlatform}
                >
                    {PLATFORMS.map(platform => (
                        <MenuItem value={platform.value} key={platform.value}>
                            {platform.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="genre">Genre:</InputLabel>
                <Select
                    labelId="genre"
                    id="demo-simple-select"
                    name='genre'
                    value={genres}
                    label="Genre"
                    onChange={handleGenre}
                >
                    {GENRES.map(genre => (
                        <MenuItem value={genre.value} key={genre.value}>
                            {genre.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="tags">Tags:</InputLabel>
                <Select
                    labelId="tags"
                    id="demo-simple-select"
                    name='tag'
                    value={tags}
                    label="Tags"
                    onChange={handleTags}
                >
                    {TAGS.map(tag => (
                        <MenuItem value={tag.value} key={tag.value}>
                            {tag.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>

                <InputLabel id="sortBy">Sort by::</InputLabel>
                <Select
                    labelId="sortBy"
                    id="demo-simple-select"
                    value={sortBy}
                    name='sortBy'
                    label="Sort by"
                    onChange={handleSortBy}
                >
                    {SORT_BY.map(sortBy => (
                        <MenuItem value={sortBy.value} key={sortBy.value}>
                            {sortBy.display}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            
            
        </Box>
    );
}

export default GameFilter;