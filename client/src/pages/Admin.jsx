import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa'
import { useLoaderData, redirect } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { StatItem } from '../components'

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats')
    return response.data
  } catch (error) {
    toast.error(`You're not authorized to view this page`)
    return redirect('/dashboard')
  }
}

const Admin = () => {
  const { users, jobs } = useLoaderData()
  return (
    <Wrapper>
      <StatItem
        title='current users'
        count={users}
        color='#e9b949'
        bcg='#fcefc7'
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title='total jobs'
        count={jobs}
        color='#647acb'
        bcg='#e0e8f9'
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  )
}
export default Admin

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
