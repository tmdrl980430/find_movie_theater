import React from 'react'
import { atom } from 'recoil'


export const severURLRecoilState = atom({
    key: 'severURLRecoilState',
    default: 'http://gaonnuri-env.eba-y3qcnx5y.ap-northeast-2.elasticbeanstalk.com/admin',
  })