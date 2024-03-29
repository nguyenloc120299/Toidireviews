import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    Flex,
    Button,
    Box,
    Image,
    Heading,
    Text,
    Spinner,
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { ALERT_ACTION } from '../redux/actions/alertAction'
import { getDataAPI } from '../untils/fetchData'
import { useHistory } from 'react-router-dom'
import ListPlaceSearch from './ListPlaceSearch'
const ModalPlaceReview = ({ isOpen, onClose, handleSelectPlace }) => {
    const dispatch = useDispatch()
    const [places, setPlaces] = useState([])
    const history = useHistory()
    const [valueSearch, setValueSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const handleOnChange = async (e) => {
        const { value } = e.target
        setValueSearch(value)
    }


    const onSubmit = async (value) => {
        try {
            setLoading(true)
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    loading: true
                }
            })
            const res = await getDataAPI(`places/search?name=${value}`)
            setPlaces(res.data.places)
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {}
            })
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    const selectePlace = (place) => {
        handleSelectPlace(place)
        onClose()
    }
    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                onSubmit(valueSearch)
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [valueSearch]);
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={'lg'}>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>Chọn địa điểm đánh giá</ModalHeader>
                <ModalCloseButton _focus={{ border: "unset" }} />
                <ModalBody>
                    <Flex>
                        <FormControl position={'relative'} bg='gray.200' rounded={'lg'} mr={1}>
                            <Flex alignItems={'center'}>
                                {
                                    loading ?
                                        <Spinner size='xs' style={{ margin: '0 10px', cursor: 'pointer', fontSize: "20px", color: "#999" }} />
                                        : <AiOutlineSearch style={{ margin: '0 10px', cursor: 'pointer', fontSize: "20px", color: "#999" }}
                                            onClick={() => onSubmit(valueSearch)}
                                        />
                                }

                                <Input placeholder='Tìm kiếm địa điểm' border={'unset'} _active={{
                                    border: 'unset'
                                }}
                                    _focus={{ border: 'unset' }}
                                    onChange={handleOnChange}
                                />
                            </Flex>
                        </FormControl>
                        <Button px={10}
                            display={['none', 'flex']}
                            onClick={() => history.push('/add-place')}
                            _focus={{ border: 'unset' }}
                        >Thêm địa điểm</Button>
                        <Button display={['flex', 'none']} cursor={'pointer'} color='#ccc'>+</Button>

                    </Flex>
                    {
                        places.map((item) => (
                            <ListPlaceSearch item={item} selectePlace={selectePlace} key={item._id} />
                        ))
                    }

                </ModalBody>

                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalPlaceReview